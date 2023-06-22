<?php

namespace App\Http\Controllers;

use App\Http\Requests\Customer\StoreCustomer;
use App\Http\Requests\Customer\UpdateCustomer;
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
    public function index()
    {
        $customers = $this->customerService->index();

        return Inertia::render('Customers/index', ['customers' => $customers]);
    }

    public function create()
    {
        return Inertia::render('Customers/create');
    }

    public function store(StoreCustomer $request)
    {
        $this->customerService->create($request);

        return redirect()->route('customers.index');
    }

    public function show(string $id)
    {
        $customer = $this->customerService->find($id);

        return view('customers.show', ['customer' => $customer]);
    }

    public function edit(string $id)
    {
        $customer = $this->customerService->find($id);

        return Inertia::render('Customers/edit',compact('customer'));
    }

    public function update(UpdateCustomer $request, string $id)
    {
        $this->customerService->update($request, $id);

        return redirect()->route('customers.index');
    }

    public function destroy(string $id)
    {
        $this->customerService->destroy($id);
        
        return redirect()->route('customers.index');
    }
}
