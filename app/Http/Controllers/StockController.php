<?php

namespace App\Http\Controllers;

use App\Http\Requests\Stock\StoreStock;
use App\Http\Requests\Stock\UpdateStock;
use App\Models\Stock;
use App\Models\Customer;
use App\Models\StockItem;
use App\Models\Warehouse;
use App\Services\Customer\CustomerService;
use App\Services\Stock\StockService;
use App\Services\Warehouse\WarehouseService;
use Inertia\Inertia;

class StockController extends Controller
{
    protected CustomerService $customerService;
    protected WarehouseService $warehouseService;
    protected $stockService;

    function __construct(StockService $stockService,CustomerService $customerService ,WarehouseService $warehouseService)
    {
        $this->stockService     = $stockService;
        $this->warehouseService = $warehouseService;
        $this->customerService  = $customerService;
    }
    public function index()
    {
        $stocks = $this->stockService->index();

        return Inertia::render('Stocks/index', ['stocks' => $stocks]);
    }

    public function create()
    {
        $warehouses = $this->warehouseService->index();
        return Inertia::render('Stocks/create', ['warehouses'=>$warehouses]);
    }

    public function store(StoreStock $request)
    {
        $createStock = $this->stockService->create($request);

        return redirect()->route('stocks.index');
    }

    public function show(string $id)
    {
        $stock = $this->stockService->find($id);

        return view('stocks.show', ['stock' => $stock]);
    }

    public function edit(string $id)
    {
        $stock = $this->stockService->find($id);
        $customers = $this->customerService->index();
        $warehouses = $this->warehouseService->index();
        return Inertia::render('Stocks/edit',['stock' => $stock, 'customers'=>$customers, 'warehouses'=>$warehouses]);
    }

    public function update(UpdateStock $request, string $id)
    {
        $this->stockService->update($request, $id);

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
        $allUserStocks = $this->stockService->getAllUserStocks($id);

        return Inertia::render('Stocks/userStock', ["allUserStocks" => $allUserStocks]);
    }
}
