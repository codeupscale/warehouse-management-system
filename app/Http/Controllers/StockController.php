<?php

namespace App\Http\Controllers;

use App\Http\Requests\Stock\StoreStock;
use App\Http\Requests\Stock\UpdateStock;
use App\Models\Stock;
use App\Models\Customer;
use App\Models\StockItem;
use App\Models\Warehouse;
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
        $stocks = Stock::with("customer", "warehouse")->get();
        return Inertia::render('Stocks/index', ['stocks' => $stocks]);
    }

    public function create()
    {
        $customers = Customer::all();
        $warehouses = Warehouse::all();
        return Inertia::render('Stocks/create', ['customers' => $customers, 'warehouses'=>$warehouses]);
    }

    public function store(StoreStock $request)
    {
        $createStock = $this->stockService->create($request);
        return redirect()->route('stocks.index');
    }

    public function show(string $id)
    {
        $stock = Stock::find($id);
        return view('stocks.show', ['stock' => $stock]);
    }

    public function edit(string $id)
    {
        $stock = $this->stockService->find($id);
        // $stocks = Stock::with("customer", "warehouse")->get();
        $customers = Customer::all();
        $warehouses = Warehouse::all();
        return Inertia::render('Stocks/edit',['stock' => $stock, 'customers'=>$customers, 'warehouses'=>$warehouses]);
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

  
    public function getStockItems($id)
    {
        $stockItems = $this->stockService->getStockItems($id);
        return Inertia::render('Stocks/stockItems', ["stockItems" => $stockItems]);
    }

    public function getAllUserStocks($id)
    {
        $allUserStocks = Stock::where('warehouse_id',$id)->get();
        return Inertia::render('Stocks/userStock', ["allUserStocks" => $allUserStocks]);
    }
    
    public function userStockItems($id)
    {
        $stockItems = StockItem::where('stock_id',$id)->with('stock')->get();
        return Inertia::render('StockItems/userStockItems',['stockItems' => $stockItems]);
    }
}
