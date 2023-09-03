<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function __construct(){
          $this->middleware('auth:api',[
              'except' => ['login','register']
          ]);
    }


   public function register(RegisterRequest $request){
        $data = $request->validated();

        $user = User::create([
              'name' => $data['name'],
              'email' => $data['email'],
              'password' =>  Hash::make($data['password'])
        ]);

        $token = Auth::login($user);

       if (!$token) {
            return response()->json(["status" => "error", "message" => 'Register Failed'],401);
       }

        return response()->json([
            'status' => 'success',
            'message' => 'You are logged in !',
            'user' => $user,
            'token' => $token
        ]);


}

   public function login(LoginRequest $request){
        $data = $request->validated();

        $credentials = $request->only('email','password');

        $token = Auth::attempt($credentials);

        if (!$token) {
            return response()->json(["status" => "error", "message" => 'Login Failed'],401);
        }

        return response()->json([
                'status' => 'success',
                'message' => 'You are logged in !',
                'user' => Auth::user(),
                'token' => $token
            ]);

   }

   public function profile(){

      return response()->json([
        'status' => 'success',
        'message' => 'You are authenticated',
        'user' => auth()->user(),
    ]);
   }



   public function completeProfile(Request $request){

    $data = $request->all();

    if ($request->hasFile('img')) {
        $image = $request->file('img');
        $filename = time() . '.' . $image->getClientOriginalExtension();
        $path = $image->storeAs('public/images', $filename);
        $data['img'] = $filename;
        $data['profileCompleted'] = true;
    }

    // Retrieve the authenticated user instance and update its data
    $user = Auth::user();
    $user->update($data);

    return response()->json([
        'status' => 'success',
        'message' => 'Profile updated successfully!',
        'user' => $user,
    ]);
}


   public function logout(){

   }
}
