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
            'warehouse_id'  => 'required|exists:warehouses,id'
        ];
    }

    public function messages()
    {
        return [

            'name.required'          => 'Name is required',
            'warehouse_id.required'  => 'Please select a warehouse',
            'warehouse_id.exists'    => 'Please select a warehouse',
        ];
    }
}
