<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUser extends FormRequest
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
            'first_name'            => 'string',
            'last_name'             => 'string',
            'email' => [
                'email',
                'required',
                'max:255',
                Rule::unique('users')->ignore(request()->id),
            ],
            'password' => 'nullable|string|min:8',
            'password_confirmation' => 'nullable|string|same:password',
            'customer_id'            => 'required|integer|exists:customers,id',
        ];
    }

    public function messages()
    {
           return [
            'first_name.string'     => 'First name must be string',
            'last_name.string'      => 'Last name must be string',
            'email.unique'          => 'Email already taken',
            'customer_id.exists'    => 'Please Select a Customer',
            'customer_id.required'  => 'Please Select a Customer',
            'customer_id.integer'   => 'Please Select a Customer',
           ];
    }
}
