<?php

namespace App\Repositories\Warehouse;

use App\Interfaces\Warehouse\WarehouseInterface;
use App\Models\Stock;
use App\Models\Warehouse;

class WarehouseRepository implements WarehouseInterface
{
    /**
     * 
     */
    protected $warehouse;
    protected $stock;

    /**
     * PostRepository constructor.
     *
     * 
     */
    public function __construct(Warehouse $warehouse, Stock $stock)
    {
        $this->warehouse = $warehouse;
        $this->stock = $stock;
    }

    public function index()
    {
        return $this->warehouse::all();
    }

    public function create($input)
    {
        $warehouse = $this->warehouse::create($input);

        return $warehouse;
    }

    public function find(int $id)
    {
        return $this->warehouse::find($id);
    }

    public function update($input, int $id)
    {
        $warehouse = $this->warehouse::findOrFail($id);
        $warehouse->update($input);
        return $warehouse;
    }

    public function destroy(int $id)
    {
        return $this->warehouse::where('id', $id)->delete();
    }

    public function getAllStocks($id)
    {
        $allStocks = $this->stock::where('warehose_id',$id)->get();
        return $allStocks;
    }

}