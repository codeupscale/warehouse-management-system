<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUser extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
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
            'email'                 => 'email|unique:users',
            'password'              => 'required|string|min:8',
            'image'                 => 'required|string|mimes:jpeg,jpg,png,gif',
        ];
    }

    public function messages()
    {
           return [
            'first_name.string'     => 'First name must be string',
            'last_name.string'      => 'Last name must be string',
            'email.unique'          => 'Email already taken',
            'password.required'     => 'Password is requied ans min length is 8',
            'image.required'        => 'Image is required',
           ];
    }
}