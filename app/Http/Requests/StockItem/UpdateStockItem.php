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
            'warehouse_id'      => 'exists:warehouses,id',
            'name'              => 'string',
            'size'              => 'integer',
            'minimum_quantity'  => 'integer',
            'quantity'          => 'integer',
        ];
    }

    function messages()
    {
        return [
            'warehouse_id.exists'        => 'Please select a warehouse',
            'name.string'                => 'Name must e string',
            'size.integer'               => 'Size must be number',
            'minimum_quantity.integer'   => 'Minimum quantity must be number',
            'quantity.integer'           => 'Quantity must be number',
        ];
    }
}
