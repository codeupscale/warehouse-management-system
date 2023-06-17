<?php

namespace App\Providers;

use App\Interfaces\Customer\CustomerInterface;
use App\Interfaces\Warehouse\WarehouseInterface;
use App\Repositories\Customer\CustomerRepository;
use App\Repositories\Warehouse\WarehouseRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(CustomerInterface::class, CustomerRepository::class);
        $this->app->bind(WarehouseInterface::class, WarehouseRepository::class);
    }
}