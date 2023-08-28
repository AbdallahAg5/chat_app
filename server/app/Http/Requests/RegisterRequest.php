<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;


class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "name" => ["required","string"],
            "email" => ['required',"email","unique:users,email"],
            "password" => ["required",Password::min(8)->letters()->numbers()->symbols()]
        ];
    }


    public function messages()
    {
        return [
            "email.unique" => "Email Already Taken .",
            'password.required' => 'The password field is required.',
            'password.min' => 'The password must be at least :min characters.',
            'password.letters' => 'The password must contain at least one letter.',
            'password.numbers' => 'The password must contain at least one number.',
            'password.symbols' => 'hiiiiii.'
        ];
    }
}
