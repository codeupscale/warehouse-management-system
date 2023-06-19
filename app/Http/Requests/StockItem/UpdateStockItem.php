<?php

namespace App\Http\Requests\StockItem;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStockItem extends FormRequest
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
            'warehouse_id'      => 'exists:warehouses',
            'customer_id'       => 'exists:customers',       
            'stock_id'          => 'exists:stocks',
            'name'              => 'string',
            'size'              => 'integer',
            'minimum_quantity'  => 'integer',
            'quantity'          => 'integer',
        ];
    }

    function messages()
    {
        return [
            'warehouse_id.exists'        => 'Warehouse id does not exist',
            'customer_id.exists'         => 'Customer id does not exists',
            'stock_id.required'          => 'Stock id does not exists',
            'name.string'                => 'Name must e string',
            'size.integer'               => 'Size must be integer',
            'minimum_quantity.integer'   => 'Minimum quantity must be integer',
            'quantity.integer'           => 'Quantity must be integer',
        ];
    }
}
