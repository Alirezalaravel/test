<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    
    public function index()
    {
        return view("welcome");
    }

    public function register(Request $request)
    {
        try {
            if ($request->hasFile("img")) {
                $file = $request->file("img");
                $file_name = $file->getClientOriginalName();
                $name =  explode(".",$file_name);
                $name = time() . '.' . end($name);
                $file->move(public_path("image/profile"),$name);
            
                $user = User::query()->create([
                    "username" => $request->get("username"),
                    "password" => $request->get("password"),
                    "email" => $request->get("email"),
                    "path" => $name,
                ]);
            }
        } catch (\Throwable $e) {
            // throw $e;
            return response()->json([
                "massege" => "Error"
            ],400);
        }

        return $user->createToken("Api name")->plainTextToken;
    }

    public function login(Request $request)
    {
        $user = User::query()->where("email",$request->get("email"))->first();
        if ($user == null) {
            return response()->json(["error"],400);
        }
        return $user->createToken($request->device_name)->plainTextToken;
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            "OK"
        ]);
    }

    public function profileData(Request $request)
    {

        $request->user()->currentAccessToken()->delete();
        
    }

}
