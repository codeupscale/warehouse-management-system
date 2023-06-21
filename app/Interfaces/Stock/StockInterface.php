<?php

namespace App\Interfaces\Stock;


interface StockInterface {
    public function index();
    public function create($input);
    public function find(int $id);
    public function update($input,int $id);
    public function destroy(int $id);
    public function getStockItems($id);
}