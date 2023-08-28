<?php

namespace App\Traits;

trait ApiResponser
{

  private function successResponse($data,$code)
  {
     return response()->json($data,$code);
  }



  private function errorResponse($data,$message,$code)
  {
    return response()->json(["status" => $data, "message" => $message], $code);
  }



}

?>
