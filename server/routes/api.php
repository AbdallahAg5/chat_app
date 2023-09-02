<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(["prefix" => "auth"],function(){
    Route::controller(GoogleAuthController::class)->group(function(){
        Route::get('/google',"redirect");
        Route::get('/google/callback',"callBackGoogle");
    });

    Route::controller(AuthController::class)->group(function(){
        Route::post('/register',"register");
        Route::post('/login',"login");

    Route::group(["middleware"=>"auth:api"],function(){
        Route::get('/profile',"profile");
        Route::post('/complete-profile',"completeProfile");
    });

    });
});




