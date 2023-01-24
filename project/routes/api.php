<?php

use App\Http\Controllers\PhoneController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/store',[PhoneController::class,"store"]);
Route::get("/data",[PhoneController::class,"DataUser"]);
Route::delete("/delete/{id}",[PhoneController::class,"destroy"]);
Route::get("/edit/{id}",[PhoneController::class,"edit"]);
Route::post("/update/{id}",[PhoneController::class,"update"]);
Route::get("/Search/{slug}",[PhoneController::class,"Search"]);
Route::post("/uploadFile",[PhoneController::class,"uploadFile"]);

Route::post("/register",[UserController::class,"register"]);
Route::post("/login",[UserController::class,"login"]);

// Route::get("/profile/edit/{id}",[PhoneController::class,"ProfileUpdate"]);
// Route::post("/profile/edit",[PhoneController::class,"ProfileEdit"]);


Route::group(['middleware' => ['auth:sanctum']], function () {
	Route::get('/logout',[UserController::class,"logout"]);
   
    Route::get('/user', function (Request $request) {
        // return $request->user();
        return response()->json(["Alireza"]);
    });

    Route::get("/img",[UserController::class,"img"]);
    Route::get("/profile",[UserController::class,"profile"]);
    Route::post("/profileEdit",[UserController::class,"update"]);
    Route::get("/profileDelete",[UserController::class,"destroy"]);
});

