<?php

namespace App\Http\Controllers;

use App\Http\Requests\StockItem\StoreStockItem;
use App\Http\Requests\StockItem\UpdateStockItem;
use App\Services\StockItem\StockItemService;
use Inertia\Inertia;
use App\Models\StockItem;
use App\Models\Stock;
use App\Services\Stock\StockService;
use App\Services\Warehouse\WarehouseService;

class StockItemController extends Controller
{
    protected StockItemService $stockItemService;
    protected WarehouseService $warehouseService;

    function __construct(StockItemService $stockItemService, WarehouseService $warehouseService)
    {
        $this->stockItemService = $stockItemService;
        $this->warehouseService = $warehouseService;
    }
 
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stockItems = $this->stockItemService->index();
        
        return Inertia::render('StockItems/index', ['stockItems' => $stockItems]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $warehouses = $this->warehouseService->index();

        return Inertia::render('StockItems/create',['warehouses' => $warehouses]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStockItem $request)
    {
        $this->stockItemService->create($request);

        return redirect()->route('stockItems.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $stockItem = $this->stockItemService->find($id);

        return view('stockItems.show', ['stockItem' => $stockItem]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $stockItem = $this->stockItemService->find($id);
        $warehouses = $this->warehouseService->index();
        return Inertia::render('StockItems/edit',['stockItem' => $stockItem, 'warehouses' => $warehouses]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStockItem $request, string $id)
    {
        $this->stockItemService->update($request, $id);

        return redirect()->route('stockItems.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->stockItemService->destroy($id);

        return redirect()->route('stockItems.index');
    }

    public function itemTakeout($id)
    {
        $this->stockItemService->itemTakeout($id);

        return redirect()->route('customer.warehouses');
    }

    public function userStockItems($id)
    {
        $stockItems = StockItem::where('warehouse_id',$id)->with('warehouse')->get();
        return Inertia::render('StockItems/userStockItems',['stockItems' => $stockItems]);
    }

}
