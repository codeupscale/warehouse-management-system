<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_name',
        'street',
        'house_no',
        'postal_code',
        'city',
        'country',
        'email',
    ];

    public function warehouses()
    {
        return $this->hasMany(Warehouse::class);
    }
    public function users()
    {
        return $this->hasMany(User::class, 'id');
    }
    public function stocks()
    {
        return $this->hasMany(Stock::class);
    }
}
