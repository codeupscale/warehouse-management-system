<?php

namespace App\Http\Controllers;

use App\Http\Requests\Warehouse\StoreWarehouse;
use App\Http\Requests\Warehouse\UpdateWarehouse;
use App\Models\Customer;
use App\Models\Warehouse;
use App\Services\Warehouse\WarehouseService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WarehouseController extends Controller
{

    protected $warehouseService;

    function __construct(WarehouseService $warehouseService)
    {
        $this->warehouseService = $warehouseService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $warehouses = Warehouse::with("customer")->get();
        return Inertia::render('Warehouses/index', ['warehouses' => $warehouses]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $customers=Customer::all();
        return Inertia::render('Warehouses/create', ['customers'=> $customers]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreWarehouse $request)
    {
        $createCustomer = $this->warehouseService->create($request);
        return redirect()->route('warehouses.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $warehouse = Warehouse::find($id);
        return view('warehouses.show',compact('warehouse'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    // {
    //     $warehouse = $this->warehouseService->find($id);

    //     $customers = Customer::all();
    //     return view('warehouses.edit',compact('warehouse','customers'));
    // }
    {
        $warehouse = $this->warehouseService->find($id);
        $customers = Customer::all();
        return Inertia::render('Warehouses/edit',compact('warehouse', 'customers'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateWarehouse $request, string $id)
    {
        $updateWarehouse = $this->warehouseService->update($request, $id);
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
}
