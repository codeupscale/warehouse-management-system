<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Warehouse extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'customer_id',
    ];

    public function customers()
    {
        return $this->hasMany(Customer::class);
    }

    public function stock()
    {
        return $this->hasOne(Stock::class);
    }
}
