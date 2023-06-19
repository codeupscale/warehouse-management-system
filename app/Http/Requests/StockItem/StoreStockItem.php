<?php

namespace App\Http\Requests\StockItem;

use App\Models\Stock;
use App\Models\Warehouse;
use Illuminate\Foundation\Http\FormRequest;

class StoreStockItem extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'warehouse_id'      => 'required|exists:warehouses',
            'customer_id'       => 'required|exists:customers',       
            'stock_id'          => 'required|exists:stocks',
            'name'              => 'required|string',
            'size'              => 'required|integer',
            'minimum_quantity'  => 'required|integer',
        ];
    }

    function messages()
    {
        return [
            'warehouse_id.required'      => 'Warehouse id is required',
            'warehouse_id.exists'        => 'Warehouse id does not exist',
            'customer_id.required'       => 'Customer id is required',
            'customer_id.exists'         => 'Customer id does not exists',
            'stock_id.required'          => 'Stock id is required',
            'stock_id.exists'            => 'Stock id does not exists',
            'name.required'              => 'Name is required',
            'size.required'              => 'Size is required',
            'size.integer'               => 'Size must be integer',
            'minimum_quantity.required'  => 'Minimum quantity is required',
            'minimum_quantity.integer'   => 'Minimum quantity must be integer',
        ];
    }

   

}
