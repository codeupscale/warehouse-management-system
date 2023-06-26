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
            'warehouse_id'      => 'required|exists:warehouses,id',
            'name'              => 'required|string',
            'size'              => 'required|integer',
            'minimum_quantity'  => 'required|integer',
            'quantity'          => 'required|integer',
        ];
    }

    function messages()
    {
        return [
            'warehouse_id.required'      => 'Please select a warehouse',
            'warehouse_id.exists'        => 'Please select a warehouse',
            'name.required'              => 'Name is required',
            'size.required'              => 'Size is required',
            'size.integer'               => 'Size must be number',
            'minimum_quantity.required'  => 'Minimum quantity is required',
            'quantity.required'          => 'Quantity is required',
            'minimum_quantity.integer'   => 'Minimum quantity must be number',
            'quantity.integer'           => 'Quantity must be number',
        ];
    }

   

}
