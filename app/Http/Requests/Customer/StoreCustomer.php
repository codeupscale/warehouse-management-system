<?php

namespace App\Http\Requests\Customer;

use Illuminate\Foundation\Http\FormRequest;

class StoreCustomer extends FormRequest
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
            'customer_name' => 'required|string',
            'street'        => 'required|string',
            'house_no'      => 'required|string',
            'postal_code'   => 'required|string',
            'city'          => 'required|string',
            'country'       => 'required|string',
            'email'         => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'customer_name.required'    => 'Name is required',
            'street.required'           => 'Street is required',
            'house_no.required'         => 'House no is required',
            'postal_code.required'      => 'Postal code is required',
            'city.required'             => 'City is required',
            'country.required'          => 'Country is required',
            'email.required'            => 'Email is required',
        ];
    }
}
