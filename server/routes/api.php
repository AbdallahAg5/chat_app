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
    Route::get('/google',[GoogleAuthController::class,"redirect"]);
    Route::get('/google/callback',[GoogleAuthController::class,"callBackGoogle"]);
    Route::post('/register',[AuthController::class,"register"]);
    Route::post('/login',[AuthController::class,"login"]);
    Route::get('/profile',[AuthController::class,"profile"]);
});




