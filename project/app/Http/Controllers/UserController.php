<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;

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
                $file->move(public_path("image/img"),$name);
            
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
    }

    public function login(Request $request)
    {
        $user = User::query()->where("email",$request->get("email"))->first();
        if ($user == null) {
            return response()->json(["error"],400);
        }
        return $user->createToken($request->device_name)->plainTextToken;
    }

    public function logout(Request $request) {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'message' => "logout ok"
        ]);
    }

    public function profile(Request $request)
    {
        return $request->user();
    }

    public function img(Request $request)
    {
        return $request->user()->path;
    }

    public function update(Request $request)
    {
        try {
            $user = $request->user();
            if ($request->hasFile("path")) { 
                File::delete("./image/img/".$user->path);
                $file = $request->file("path");
                $file_name = $file->getClientOriginalName();
                $name =  explode(".",$file_name);
                $name = time() . '.' . end($name);
                $file->move(public_path("image/img"),$name);
            }else{
                $name = $user->path;
            }
            $user->update([      
                "username" => $request->get("username"),
                "email" => $request->get("email"),
                "path" => $name
            ]);
            return response()->json([
                $user
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                "massege" => $th
            ],400);
        }
        
    }

    public function destroy(Request $request)
    {
        $user = $request->user();
        File::delete("./image/img/".$user->path);
        $request->user()->currentAccessToken()->delete();
        $user->delete();
        return response()->json([
            "massege" => "The user has been deleted"
        ]);
    }

}




