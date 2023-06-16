<?php

namespace App\Services\Customer;

use App\Interfaces\Customer\CustomerInterface;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use InvalidArgumentException;
use Illuminate\Http\Request;

Class CustomerService
{
    protected CustomerInterface $customerInterface;

    /**
     * PostService constructor.
     *
     * @param UserRepositoryInterface $userRepositoryInterface
     */
    public function __construct(CustomerInterface $customerInterface)
    {
        $this->customerInterface = $customerInterface;
    }

    public function index()
    {
        try {
            $customers =  $this->customerInterface->index();
            return view('customers.index');
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to fetch customers');
        }

    }

    public function create(Request $request)
    {
        try {
            DB::beginTransaction();
            $input = $request->all();
            $input = \Arr::except($input,['_token']);
            $customer = $this->customerInterface->create($input);

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to create customer');
        }
        return "success";
    }
    public function find($id)
    {
        try {
            $customer = $this->customerInterface->find($id);
            return $customer;
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to find customer');
        }
        return "success";
    }
    public function update(Request $request, $id)
    {
        try {
            DB::beginTransaction();
            $input = $request->all();
            $customer = $this->customerInterface->update($input, $id);

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to create Customer');
        }
        return "success";
    }
    public function destroy($id){
        try {
            DB::beginTransaction();
            $this->customerInterface->destroy($id);
            DB::commit();
        }catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to delete customer');
        }
        return "success";
    }
}
