<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
            try {
                DB::beginTransaction();
                User::create([
                    'email' => 'admin@admin.com',
                    'password' => bcrypt('12345678'),
                    'type' => config('constants.actor.admin'),
                ]);
    
                DB::commit();
            } catch (\Exception) {
                DB::rollBack();
                throw new \Exception('Unable to create admin');
            }
    }
}
