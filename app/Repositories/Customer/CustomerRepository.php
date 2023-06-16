<?php

namespace App\Repositories\Customer;

use App\Interfaces\Customer\CustomerInterface;
use App\Models\Customer;

class CustomerRepository implements CustomerInterface
{
    /**
     * 
     */
    protected $customer;

    /**
     * PostRepository constructor.
     *
     * 
     */
    public function __construct(Customer $customer)
    {
        $this->customer = $customer;
    }

    public function index()
    {
        return $this->customer::all();
    }

    public function create($input)
    {
        $customer = $this->customer::create($input);

        return $customer;
    }

    public function find(int $id)
    {
        return $this->customer::find($id);
    }

    public function update($input, int $id)
    {
        $customer = $this->customer::findOrFail($id);
        $customer->update($input);
        return $customer;
    }

    public function destroy(int $id)
    {
        return $this->customer::where('id', $id)->delete();
    }

}