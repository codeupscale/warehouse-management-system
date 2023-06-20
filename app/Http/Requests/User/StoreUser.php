<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class StoreUser extends FormRequest
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
            'first_name'            => 'required|string',
            'last_name'             => 'required|string',
            'company_id'            => 'required|integer|exists:customers',
            'email'                 => 'required|email|unique:users',
            'password'              => 'required|string|min:8',
            'password_confirmation' => 'string|same:password',
            'image'                 => 'required|mimes:png,jpg,gif,svg,jpeg',
        ];
    }

    public function messages()
    {
           return [
            'first_name.required'   => 'First name is required',
            'last_name.required'    => 'Last name is required',
            'email.required'        => 'Email is required',
            'email.unique'          => 'Email already taken',
            'password.required'     => 'Password is requied ans min length is 8',
            'image.required'        => 'Image is required',
            'company_id.required'   => 'Company id is required',
            'company_id.exists'     => 'Company id does not exist',
           ];
    }
}
