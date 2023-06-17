<?php

namespace App\Repositories\Warehouse;

use App\Interfaces\Warehouse\WarehouseInterface;
use App\Models\Warehouse;

class WarehouseRepository implements WarehouseInterface
{
    /**
     * 
     */
    protected $warehouse;

    /**
     * PostRepository constructor.
     *
     * 
     */
    public function __construct(Warehouse $warehouse)
    {
        $this->warehouse = $warehouse;
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

}