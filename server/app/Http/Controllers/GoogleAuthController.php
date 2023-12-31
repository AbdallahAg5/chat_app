<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\ApiController;
use Illuminate\Routing\Controller;



class GoogleAuthController extends Controller
{
    public function redirect(){
        return Socialite::driver('google')->stateless()->redirect();

    }


    public function callBackGoogle(){
        $google_user = Socialite::driver('google')->stateless()->user();
        $user = User::where('google_id',$google_user->getId())->first();
        $new_user="";

        if(!$user){
            $new_user = User::create([
                "name" => $google_user->getName(),
                "email" => $google_user->getEmail(),
                "google_id" => $google_user->getId()
            ]);
            Auth::login($new_user);
            return redirect('http://localhost:5173/complete/profile');
        }
        else{
            Auth::login($new_user);
            return redirect('http://localhost:5173');
        }


    }
}



