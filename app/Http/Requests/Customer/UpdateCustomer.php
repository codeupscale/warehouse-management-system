<?php

namespace App\Http\Requests\Customer;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCustomer extends FormRequest
{
    /**
     * Determine if the user must be authorized to make this request.
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
            'customer_name' => 'string',
            'street'        => 'string',
            'house_no'      => 'string',
            'postal_code'   => 'string',
            'city'          => 'string',
            'country'       => 'string',
            'email'         => 'string|unique:customers,email',
        ];
    }

    public function messages()
    {
        return [
            'customer_name.string'    => 'Name must be string',
            'street.string'           => 'Street must be string',
            'house_no.string'         => 'House no must be string',
            'postal_code.string'      => 'Postal code must be string',
            'city.string'             => 'City must be string',
            'country.string'          => 'Country must be string',
            'country.unique'          => 'Email is already taken',
        ];
    }
}
