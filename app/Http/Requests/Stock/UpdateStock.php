<?php

namespace App\Http\Requests\Stock;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStock extends FormRequest
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
            'name'          => 'string',
            'customer_id'   => 'exists:customers,id',
            'warehouse_id'  => 'exists:warehouses,id'
        ];
    }

    public function messages()
    {
        return [

            'name.string'            => 'Name must be string',
            'warehouse_id.exists'    => 'Warehouse id does not exist',
            'customer_id'            => 'Customer id does not exist',
        ];
    }
}
