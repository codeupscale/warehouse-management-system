<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Warehouse;
use App\Services\Warehouse\WarehouseService;
use Illuminate\Http\Request;

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
        return view('warehouses.index',[
            'warehouses' => Warehouse::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $customers = Customer::all();
        return view('warehouses.create',compact('customers'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
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
    {
        $warehouse = $this->warehouseService->find($id);

        $customers = Customer::all();
        return view('warehouses.edit',compact('warehouse','customers'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
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
