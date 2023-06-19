<?php


function userImage($image, $folder)
{
    $imagePath = time()."_".$image->getClientOriginalName();
    $image->move(public_path('images/'.$folder), $imagePath);
    return $imagePath;
}