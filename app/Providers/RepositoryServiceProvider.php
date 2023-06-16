<?php

namespace App\Providers;

use App\Interfaces\Customer\CustomerInterface;
use App\Repositories\Customer\CustomerRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(CustomerInterface::class, CustomerRepository::class);
    }
}