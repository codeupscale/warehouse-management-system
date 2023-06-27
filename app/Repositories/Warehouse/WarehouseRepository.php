<?php

namespace App\Repositories\Warehouse;

use App\Interfaces\Warehouse\WarehouseInterface;
use App\Models\StockItem;
use App\Models\Warehouse;
use Illuminate\Support\Facades\Auth;

class WarehouseRepository implements WarehouseInterface
{
    /**
     * 
     */
    protected $warehouse;
    protected StockItem $stockItem;

    /**
     * PostRepository constructor.
     *
     * 
     */
    public function __construct(Warehouse $warehouse, StockItem $stockItem)
    {
        $this->warehouse = $warehouse;
        $this->stockItem = $stockItem;
    }

    public function index()
    {
        return $this->warehouse::with('customer')->get();
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

    public function getAllItems($id)
    {
        
        $allStocks = $this->stockItem::where('warehouse_id',$id)->get();
        
        return $allStocks;
    }

    public function customerWarehouses()
    {
        $user = Auth::user();
        $customerWarehouses = Warehouse::where('customer_id', $user->customer_id)->with('customer')->get();
        return $customerWarehouses;
    }

}