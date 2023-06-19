<?php

namespace App\Services\StockItem;

use App\Interfaces\StockItem\StockItemInterface;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use InvalidArgumentException;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

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
            return false;
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
            return false;
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
}
