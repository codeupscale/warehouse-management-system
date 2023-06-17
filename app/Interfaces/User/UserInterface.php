<?php

namespace App\Interfaces\User;


interface UserInterface {
    public function index();
    public function create($input);
    public function find(int $id);
    public function update($input,int $id);
    public function destroy(int $id);
}