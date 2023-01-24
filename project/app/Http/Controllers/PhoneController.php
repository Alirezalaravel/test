<?php

namespace App\Http\Controllers;

use App\Http\Requests\PhoneRequest;
use App\Phone;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class PhoneController extends Controller
{
    public function DataUser()
    {
        return Phone::all();
    }

    public function store(Request $request)
    {
        try {
            if ($request->hasFile("img")) {
                $file = $request->file("img");
                $file_name = $file->getClientOriginalName();
                $name =  explode(".",$file_name);
                $name = time() . '.' . end($name);
                $file->move(public_path("image"),$name);
                
                Phone::query()->create([
                    "firstname" => $request->get("firstname"),
                    "lastname" => $request->get("lastname"),
                    "phone" => $request->get("phone"),
                    "path" => $name,
                ]);
            }
        } catch (\Throwable $e) {
            // throw $e;
            return response()->json([
                "massege" => "Error"
            ],400);
        }
        return response()->json($request);
    }


    public function edit($id)
    {
        $user = Phone::query()->where("id",$id)->firstOrFail();
        return response()->json( $user , 200);
    }


    public function update(Request $request, $id)
    {
        
        $user = Phone::query()->where("id",$id)->firstOrFail();
        if ($request->hasFile("img")) { 
            File::delete("./image/".$user->path);
            $file = $request->file("img");
            $file_name = $file->getClientOriginalName();
            $name =  explode(".",$file_name);
            $name = time() . '.' . end($name);
            $file->move(public_path("image"),$name);
        }else{
            $name = $user->path;
        }
        $user->update([      
            "firstname" => $request->get("firstname"),
            "lastname" => $request->get("lastname"), 
            "phone" => $request->get("phone"),
            "path" => $name
        ]);
        return response()->json([
            $user
        ]);
    }

    public function destroy($id)
    {
        $user = Phone::query()->where("id",$id)->firstOrFail();
        File::delete("./image/".$user->path);
        $user->delete();
        return response()->json([
            "OK"
        ]);
        
    }

    public function Search($slug)
    {

        $user = Phone::query()
            ->where('id', 'like', "%{$slug}%")
            ->orWhere('firstname', 'like', "%{$slug}%")
            ->orWhere('lastname', 'like', "%{$slug}%")
            ->orWhere('phone', 'like', "%{$slug}%")
                ->get();


        if ($user == null) {
            $user = "not value";
        }

        return response()->json( $user , 200);
    }


}
