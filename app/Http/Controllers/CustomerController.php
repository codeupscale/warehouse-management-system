<?php

namespace App\Http\Controllers;

use App\Http\Requests\Cuatomer\StoreCustomer;
use App\Models\Customer;
use App\Services\Customer\CustomerService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{

    protected $customerService;

    function __construct(CustomerService $customerService)
    {
        $this->customerService = $customerService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $customers = Customer::all();
        // return Inertia::render('Customers/Index', ['customers' => $customers]);
        return Inertia::render('Customers/Index', compact('customers'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('customers.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCustomer $request)
    {
        $createCustomer = $this->customerService->create($request);
        return redirect()->route('customers.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $customer = Customer::find($id);
        // return view('customers.show',compact('customer'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $customer = $this->customerService->find($id);
        return view('customers.edit',compact('customer'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $updateCustomer = $this->customerService->update($request, $id);
        return redirect()->route('customers.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->customerService->destroy($id);
        return redirect()->route('customers.index');
    }
}
