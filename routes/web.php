<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\StockItemController;
use App\Http\Controllers\WarehouseController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('login', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::middleware(['guest'])->group(function () {
    Route::fallback(function () {
        return view('auth.login');
    });
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth','user-access:admin'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('customers',CustomerController::class);
    Route::resource('warehouses', WarehouseController::class);
    Route::post('api/users/{id}/update',[UserController::class,'update'])->name('users.update');
    Route::resource('users',UserController::class)->except('update');
    Route::resource('stocks',StockController::class);
    Route::resource('stockItems',StockItemController::class);
    Route::get('/warehouses/{id}/stocks', [WarehouseController::class,'getAllStocks'])->name('warehouses.stock');
    Route::get('/warehouses/stock/{id}/stockItems', [StockController::class,'getStockItems'])->name('stock.stockItems');    

});

Route::middleware(['auth','user-access:user'])->group(function () {
    Route::get('items/{id}',[StockItemController::class,'itemTakeout'])->name('stockItem.takeout');
    Route::get('warehouses/index',[WarehouseController::class,'index'])->name('warehouses.user.index');
    Route::get('/customer/warehouses', [WarehouseController::class,'customerWarehouses'])->name('customer.warehouses');
    Route::get('/users/stock/{id}', [StockController::class,'getAllUserStocks'])->name('user.stock');
    Route::get('/users/stockItem/{id}', [StockController::class,'userStockItems'])->name('user.stockItem');

});



require __DIR__.'/auth.php';
