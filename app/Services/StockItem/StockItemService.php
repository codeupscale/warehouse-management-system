<?php

namespace App\Services\StockItem;

use App\Interfaces\StockItem\StockItemInterface;
use App\Models\Stock;
use App\Models\StockItem;
use App\Models\User;
use App\Models\Warehouse;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use InvalidArgumentException;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

Class StockItemService
{
    protected StockItemInterface $stockItemInterface;

    /**
     * StockItemService constructor.
     *
     * @param StockItemInterface $stockItemInterface
     */
    public function __construct(StockItemInterface $stockItemInterface)
    {
        $this->stockItemInterface = $stockItemInterface;
    }

    public function index()
    {
        try {
            $stockItems =  $this->stockItemInterface->index();
            return $stockItems;
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to fetch stock items');
        }

    }

    public function create(Request $request)
    {
        try {
            DB::beginTransaction();
            $input = $request->all();
            $input = Arr::except($input,['_token']);
            $stockItem = $this->stockItemInterface->create($input);
            DB::commit();
            return $stockItem;
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to create stockItem');
        }
        
    }

    public function find($id)
    {
        try {
            $stockItem = $this->stockItemInterface->find($id);
            return $stockItem;
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to find stockItem');
        }
    }
    
    public function update(Request $request, $id)
    {
        try {
            DB::beginTransaction();
            $input = $request->all();
            $stockItem = $this->stockItemInterface->update($input, $id);

            DB::commit();
            return $stockItem;
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to create stockItem');
        }
    }

    public function destroy($id){
        try {
            DB::beginTransaction();
            $this->stockItemInterface->destroy($id);
            DB::commit();
        }catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to delete stockItem');
        }
    }

    public function userStockItems($id){
        try {
            DB::beginTransaction();
           $userStockItems = $this->stockItemInterface->userStockItems($id);
           return $userStockItems;
        }catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to get stockItem');
        }
    }

    public function itemTakeout($id)
    {
        try {
            DB::beginTransaction();
            $stockItem = $this->stockItemInterface->find($id);
            $stockItem->decrement('quantity', 1);
            DB::commit();
            $stockItem->load('warehouse');
            if($stockItem->quantity <= $stockItem->minimum_quantity) {  
                $email = User::where('type',config('constants.actor.admin'))->pluck('email')->first();
                if(isset($email)) {
                    $content = [
                        'body'      => $stockItem->name . ' has reached its minimum quantity.',
                    ];
                    Mail::send('mail.itemMinimumQuantity', $content, function($message) use($email){
                        $message->to($email)->subject('Item Reaches Minimum Quantity Notification');
                    });
                }

            }
            $email = $stockItem->warehouse->customer->email;
            $full_name = Auth::user()->full_name;
            $content = [
                'body'      => $full_name. ' has taken out this '. dd($stockItem->name) .' from '. $stockItem->warehouse->name .' warehouse.',
            ];
            Mail::send('mail.takeoutItemEmail', $content, function($message) use($email){
                $message->to($email)->subject('Item Takeout Notification');
            });
            
            return $stockItem;
        }catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to send email');
        }
        
    }
}
