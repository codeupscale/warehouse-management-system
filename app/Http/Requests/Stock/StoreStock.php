<?php

namespace App\Http\Requests\Stock;

use Illuminate\Foundation\Http\FormRequest;

class StoreStock extends FormRequest
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
            'name'  => 'required|string',
            'customer_id'   => 'required|exists:customers',
            'warehouse_id'  => 'required|exists:warehouses'
        ];
    }

    public function messages()
    {
        return [

            'name.required'          => 'Name is required',
            'customer_id.required'   => 'Customer id is required',
            'warehouse_id.required'  => 'Warehouse id is required',
            'warehouse_id.exists'    => 'Warehouse id does not exist',
            'customer_id'            => 'Customer id does not exist',
        ];
    }
}
