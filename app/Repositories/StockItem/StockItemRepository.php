<?php

namespace App\Repositories\StockItem;

use App\Interfaces\StockItem\StockItemInterface;
use App\Models\StockItem;

class StockItemRepository implements StockItemInterface
{
    /**
     * 
     */
    protected $stockItem;

    /**
     * StockItemRepository constructor.
     *
     * 
     */
    public function __construct(StockItem $stockItem)
    {
        $this->stockItem = $stockItem;
    }

    public function index()
    {
        return $this->stockItem::with('stock')->get();
    }

    public function create($input)
    {
        $stockItem = $this->stockItem::create($input);

        return $stockItem;
    }

    public function find(int $id)
    {
        return $this->stockItem::find($id);
    }

    public function update($input, int $id)
    {
        $stockItem = $this->stockItem::findOrFail($id);
        $stockItem->update($input);
        return $stockItem;
    }

    public function destroy(int $id)
    {
        return $this->stockItem::where('id', $id)->delete();
    }

    public function itemTakeout($id)
    {
        $stockItem = $this->stockItem::findOrFail($id);

        return $stockItem;
    }

    public function userStockItems($id)
    {
        $stockItems = $this->stockItem::where('warehouse_id',$id)->get();
        
        return $stockItems;
    }

}