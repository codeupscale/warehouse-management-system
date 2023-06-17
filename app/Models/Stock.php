<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'customer_id',
        'warehouse_id',
    ];

    public function customers()
    {
        return $this->hasMany(Customer::class);
    }
    public function warehouses()
    {
        return $this->hasMany(Warehouse::class);
    }
}
