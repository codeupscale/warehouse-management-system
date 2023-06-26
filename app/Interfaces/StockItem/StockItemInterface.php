<?php

namespace App\Interfaces\StockItem;


interface StockItemInterface {
    public function index();
    public function create($input);
    public function find(int $id);
    public function update($input,int $id);
    public function destroy(int $id);
    public function itemTakeout($id);
    public function userStockItems($id);
}