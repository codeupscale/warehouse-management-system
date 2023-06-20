<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'warehouse_id',
        'customer_id',
        'stock_id',
        'name',
        'size',
        'minimum_quantity',
    ];

    public function stock()
    {
        return $this->belongsTo(Stock::class);
    }

}
