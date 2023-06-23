<?php

namespace App\Http\Requests\Warehouse;

use Illuminate\Foundation\Http\FormRequest;

class StoreWarehouse extends FormRequest
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
            'name'          => 'required|string',
            'customer_id'   => 'required|integer|exists:customers,id',
        ];
    }

    function messages()
    {
        return [
            'name.required' => 'Name is required',
            'customer_id.required' => 'Please select a Customer',
            'customer_id.exists' => 'Please select a Customer',
        ];

    }
}
