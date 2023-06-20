<?php

namespace App\Repositories\Stock;

use App\Interfaces\Stock\StockInterface;
use App\Models\Stock;

class StockRepository implements StockInterface
{
    /**
     * 
     */
    protected $stock;

    /**
     * PostRepository constructor.
     *
     * 
     */
    public function __construct(Stock $stock)
    {
        $this->stock = $stock;
    }

    public function index()
    {
        return $this->stock::all();
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

}