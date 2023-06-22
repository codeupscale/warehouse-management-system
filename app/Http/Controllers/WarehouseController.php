<?php

namespace App\Http\Controllers;

use App\Http\Requests\Warehouse\StoreWarehouse;
use App\Http\Requests\Warehouse\UpdateWarehouse;
use App\Models\Customer;
use App\Models\Warehouse;
use App\Services\Customer\CustomerService;
use App\Services\Warehouse\WarehouseService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WarehouseController extends Controller
{

    protected WarehouseService $warehouseService;
    protected CustomerService $customerService;

    function __construct(WarehouseService $warehouseService, CustomerService $customerService)
    {
        $this->warehouseService = $warehouseService;
        $this->customerService  = $customerService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $warehouses = $this->warehouseService->index();
        return Inertia::render('Warehouses/index', ['warehouses' => $warehouses]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $customers = $this->customerService->index();
        
        return Inertia::render('Warehouses/create', ['customers'=> $customers]);
    }

    /**WarehouseController@stocks
     * Store a newly created resource in storage.
     */
    public function store(StoreWarehouse $request)
    {
        $this->warehouseService->create($request);

        return redirect()->route('warehouses.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $warehouse = $this->warehouseService->find($id);

        return view('warehouses.show',compact('warehouse'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $warehouse = $this->warehouseService->find($id);
        $customers = $this->customerService->index();
        return Inertia::render('Warehouses/edit',compact('warehouse', 'customers'));  
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateWarehouse $request, string $id)
    {
        $this->warehouseService->update($request, $id);

        return redirect()->route('warehouses.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->warehouseService->destroy($id);

        return redirect()->route('warehouses.index');
    }

    public function getAllStocks($id)
    {
        $allStocks = $this->warehouseService->getAllStocks($id);

        return Inertia::render('Warehouses/stock', ["allStocks" => $allStocks]);
    }

    public function customerWarehouses()
    {
        
        $customerWarehouses = $this->warehouseService->customerWarehouses();
        
        return Inertia::render('Users/warehouse', ['customerWarehouses' => $customerWarehouses]);
    }
}
