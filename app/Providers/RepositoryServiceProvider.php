<?php

namespace App\Providers;

use App\Interfaces\Customer\CustomerInterface;
use App\Interfaces\Stock\StockInterface;
use App\Interfaces\Warehouse\WarehouseInterface;
use App\Repositories\Warehouse\WarehouseRepository;
use App\Interfaces\User\UserInterface;
use App\Repositories\Customer\CustomerRepository;
use App\Repositories\Stock\StockRepository;
use App\Repositories\User\UserRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(CustomerInterface::class, CustomerRepository::class);
        $this->app->bind(WarehouseInterface::class, WarehouseRepository::class);
        $this->app->bind(UserInterface::class, UserRepository::class);
        $this->app->bind(StockInterface::class, StockRepository::class);
    }
}