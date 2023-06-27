<?php

namespace App\Services\Warehouse;

use App\Interfaces\Warehouse\WarehouseInterface;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use InvalidArgumentException;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

Class WarehouseService
{
    protected WarehouseInterface $warehouseInterface;

    /**
     * WarehouseService constructor.
     *
     * @param WarehouseInterface $warehouseInterface
     */
    public function __construct(WarehouseInterface $warehouseInterface)
    {
        $this->warehouseInterface = $warehouseInterface;
    }

    public function index()
    {
        try {
            $warehouses =  $this->warehouseInterface->index();
            return $warehouses;
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to fetch warehouses');
        }

    }

    public function create(Request $request)
    {
        try {
            DB::beginTransaction();
            $input = $request->all();
            $input = Arr::except($input,['_token']);
            $warehouse = $this->warehouseInterface->create($input);
            DB::commit();
            return $warehouse;
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to create warehouse');
        }
        
    }
    public function find($id)
    {
        try {
            $warehouse = $this->warehouseInterface->find($id);
            return $warehouse;
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to find warehouse');
        }
    }
    public function update(Request $request, $id)
    {
        try {
            DB::beginTransaction();
            $input = $request->all();
            $warehouse = $this->warehouseInterface->update($input, $id);

            DB::commit();
            return $warehouse;
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to update warehouse');
        }
    }
    public function destroy($id){
        try {
            DB::beginTransaction();
            $this->warehouseInterface->destroy($id);
            DB::commit();
        }catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to delete warehouse');
        }
    }

    public function getAllItems($id)
    {
        try {
            DB::beginTransaction();
            $allStockItems = $this->warehouseInterface->getAllItems($id);
            return $allStockItems;
        }catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to get items');
        }
    }

    public function customerWarehouses()
    {
        try {
            DB::beginTransaction();
            $customerWarehouses = $this->warehouseInterface->customerWarehouses();
            return $customerWarehouses;
        }catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to get stocks');
        }
    }
}
