<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\StockItemController;
use App\Http\Controllers\WarehouseController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::view('/', 'auth/login');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('customers',CustomerController::class);
    Route::resource('warehouses', WarehouseController::class);
    Route::resource('users',UserController::class);
    Route::resource('stocks',StockController::class);
    Route::resource('stockItems',StockItemController::class);
    Route::get('stockItems/takeout/{id}',[StockItemController::class,'itemTakeout'])->name('stockItem.takeout');
    Route::get('/warehouses/{id}/stocks', [WarehouseController::class,'getAllStocks'])->name('warehouses.stock');

});



require __DIR__.'/auth.php';
