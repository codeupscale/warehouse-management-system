<?php

namespace App\Http\Controllers;

use App\Http\Requests\StockItem\StoreStockItem;
use App\Http\Requests\StockItem\UpdateStockItem;
use App\Services\StockItem\StockItemService;
use Inertia\Inertia;
use App\Models\StockItem;
use App\Models\Stock;

class StockItemController extends Controller
{
    protected $stockItemService;

    function __construct(StockItemService $stockItemService)
    {
        $this->stockItemService = $stockItemService;
    }
 
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stockItems = StockItem::with("stock")->get();
        return Inertia::render('StockItems/index', ['stockItems' => $stockItems]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $stocks = Stock::all();
        return Inertia::render('StockItems/create',['stocks' => $stocks]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStockItem $request)
    {
        $createStockItem = $this->stockItemService->create($request);
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
        $stocks = Stock::all();
        return Inertia::render('StockItems/edit',['stockItem' => $stockItem, 'stocks' => $stocks]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStockItem $request, string $id)
    {
        $updateStockItem = $this->stockItemService->update($request, $id);
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
        return redirect()->route('stockItems.index');
    }

}
