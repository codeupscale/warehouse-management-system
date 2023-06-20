<?php

namespace App\Http\Controllers;

use App\Http\Requests\StockItem\StoreStockItem;
use App\Http\Requests\StockItem\UpdateStockItem;
use App\Services\StockItem\StockItemService;
use Inertia\Inertia;

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
        $stockItems = $this->stockItemService->index();
        return Inertia::render('Customer', ['stockItems' => $stockItems]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('StockItems/create');
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
        return Inertia::render('Stocks/edit',['stockItem' => $stockItem]);
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
        return redirect()->route('stockItemss.index');
    }

    public function itemTakeout($id)
    {
        $this->stockItemService->itemTakeout($id);
        return true;
        return redirect()->route('stockItems.index');
    }
}
