<?php

namespace App\Repositories\Stock;

use App\Interfaces\Stock\StockInterface;
use App\Models\StockItem;
use App\Models\Stock;

class StockRepository implements StockInterface
{
    /**
     * 
     */
    protected $stock;
    protected $stockItem;

    /**
     * PostRepository constructor.
     *
     * 
     */
    public function __construct(Stock $stock, StockItem $stockItem)
    {
        $this->stock = $stock;
        $this->stockItem = $stockItem;
    }

    public function index()
    {
        return $this->stock::with('warehouse','warehouse')->get();
    }

    public function create($input)
    {
        $stock = $this->stock::create($input);

        return $stock;
    }

    public function find(int $id)
    {
        return $this->stock::find($id);
    }

    public function update($input, int $id)
    {
        $stock = $this->stock::findOrFail($id);
        $stock->update($input);
        return $stock;
    }

    public function destroy(int $id)
    {
        return $this->stock::where('id', $id)->delete();
    }

    public function getStockItems($id)
    {
        
        $stockItems = $this->stockItem::where('stock_id',$id)->get();

        return $stockItems;
    }

    public function getAllUserStocks($id)
    {
        $allUserStocks = $this->stock::where('warehouse_id',$id)->get();

        return $allUserStocks;
    }

    public function userStockItems($id)
    {
        $stockItems = $this->stockItem::where('stock_id',$id)->get();
        
        return $stockItems;
    }


}