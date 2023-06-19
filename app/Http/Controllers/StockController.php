<?php

namespace App\Http\Controllers;

use App\Http\Requests\Stock\StoreStock;
use App\Http\Requests\Stock\UpdateStock;
use App\Models\Stock;
use App\Services\Stock\StockService;
use Inertia\Inertia;

class StockController extends Controller
{

    protected $stockService;

    function __construct(StockService $stockService)
    {
        $this->stockService = $stockService;
    }
    public function index()
    {
        $stocks = Stock::all();
        return Inertia::render('Customer', ['stocks' => $stocks]);
    }

    public function create()
    {
        return Inertia::render('Stocks/create');
    }

    public function store(StoreStock $request)
    {
        $createStock = $this->stockService->create($request);
        return redirect()->route('stocks.index');
    }

    public function show(string $id)
    {
        $stock = Stock::find($id);
        return view('customers.show', ['stock' => $stock]);
    }

    public function edit(string $id)
    {
        $stock = $this->stockService->find($id);
        return Inertia::render('Stocks/edit',compact('stock'));
    }

    public function update(UpdateStock $request, string $id)
    {
        $updateStock = $this->stockService->update($request, $id);
        return redirect()->route('stocks.index');
    }

    public function destroy(string $id)
    {
        $this->stockService->destroy($id);
        return redirect()->route('stocks.index');
    }
}
