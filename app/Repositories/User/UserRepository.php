<?php

namespace App\Repositories\User;

use App\Interfaces\User\UserInterface;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserRepository implements UserInterface
{
    /**
     * 
     */
    protected $user;

    /**
     * PostRepository constructor.
     *
     * 
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function index()
    {
        return $this->user::with('customer')->where('id', '!=', Auth::id())->get();
    }

    public function create($input)
    {
        $user = $this->user::create($input);

        return $user;
    }

    public function find(int $id)
    {
        return $this->user::find($id);
    }

    public function update($input, int $id)
    {
        $user = $this->user::findOrFail($id);
        $user->update($input);
        return $user;
    }

    public function destroy(int $id)
    {
        return $this->user::where('id', $id)->delete();
    }

}