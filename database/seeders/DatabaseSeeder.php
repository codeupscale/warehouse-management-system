<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        if (!$this->hasAlreadyRun(AdminSeeder::class)) {
            $this->call(AdminSeeder::class);
            DB::table('seeds')->insert(['class_name' => AdminSeeder::class]);
        }

    }

    protected function hasAlreadyRun($className): bool
    {
        return DB::table('seeds')->where('class_name', $className)->exists();
    }
}
