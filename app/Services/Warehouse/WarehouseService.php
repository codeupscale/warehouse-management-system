<?php

namespace App\Services\warehouse;

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
     * PostService constructor.
     *
     * @param UserRepositoryInterface $userRepositoryInterface
     */
    public function __construct(WarehouseInterface $warehouseInterface)
    {
        $this->warehouseInterface = $warehouseInterface;
    }

    public function index()
    {
        try {
            $warehouses =  $this->warehouseInterface->index();
            return view('warehouses.index');
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
            return false;
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
            return false;
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
            throw new InvalidArgumentException('Unable to create warehouse');
            return false;
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
            return false;
        }
    }
}
