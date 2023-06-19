<?php

namespace App\Interfaces\Warehouse;


interface WarehouseInterface {
    public function index();
    public function create($input);
    public function find(int $id);
    public function update($input,int $id);
    public function destroy(int $id);
}