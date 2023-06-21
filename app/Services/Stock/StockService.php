<?php

namespace App\Services\Stock;

use App\Interfaces\Stock\StockInterface;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use InvalidArgumentException;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

Class StockService
{
    protected StockInterface $stockInterface;

    /**
     * StockService constructor.
     *
     * @param StockInterface $stockInterface
     */
    public function __construct(StockInterface $stockInterface)
    {
        $this->stockInterface = $stockInterface;
    }

    public function index()
    {
        try {
            $stocks =  $this->stockInterface->index();
            return view('stocks.index');
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to fetch stocks');
        }

    }

    public function create(Request $request)
    {
        try {
            DB::beginTransaction();
            $input = $request->all();
            $input = Arr::except($input,['_token']);
            $stock = $this->stockInterface->create($input);
            DB::commit();
            return $stock;
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to create stock');
            return false;
        }
        
    }
    public function find($id)
    {
        try {
            $stock = $this->stockInterface->find($id);
            return $stock;
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to find stock');
            return false;
        }
    }
    public function update(Request $request, $id)
    {
        try {
            DB::beginTransaction();
            $input = $request->all();
            $stock = $this->stockInterface->update($input, $id);

            DB::commit();
            return $stock;
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to create stock');
            return false;
        }
    }
    public function destroy($id){
        try {
            DB::beginTransaction();
            $this->stockInterface->destroy($id);
            DB::commit();
        }catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to delete stock');
            return false;
        }
    }

    public function getStockItems($id){
        try {
            DB::beginTransaction();
           $stockItems = $this->stockInterface->getStockItems($id);
           return $stockItems;
        }catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to get stockItem');
        }
    }
}
