<?php

namespace App\Repositories\StockItem;

use App\Interfaces\StockItem\StockItemInterface;
use App\Models\StockItem;

class StockRepository implements StockItemInterface
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
        return $this->stockItem::all();
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

}