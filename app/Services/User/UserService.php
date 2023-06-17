<?php

namespace App\Services\User;

use App\Interfaces\Customer\CustomerInterface;
use App\Interfaces\User\UserInterface;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use InvalidArgumentException;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

Class UserService
{
    protected UserInterface $userInterface;

    /**
     * PostService constructor.
     *
     * @param UserRepositoryInterface $userRepositoryInterface
     */
    public function __construct(UserInterface $userInterface)
    {
        $this->userInterface = $userInterface;
    }

    public function index()
    {
        try {
            $users =  $this->userInterface->index();
            return view('users.index');
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to fetch users');
        }

    }

    public function create(Request $request)
    {
        try {
            DB::beginTransaction();
            $input = $request->all();
            $input['image'] = userImage($request->image, 'User-Picture');
            $input = Arr::except($input,['_token']);
            $user = $this->userInterface->create($input);
            // dd($user);

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to create user');
        }
        return "success";
    }
    public function find($id)
    {
        try {
            $user = $this->userInterface->find($id);
            return $user;
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to find user');
        }
        return "success";
    }
    public function update(Request $request, $id)
    {
        try {
            DB::beginTransaction();
            $input = $request->all();
            $input['image'] = userImage($request->image, 'User-Picture');
            $user = $this->userInterface->update($input, $id);

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to create user');
        }
        return "success";
    }
    public function destroy($id){
        try {
            DB::beginTransaction();
            $this->userInterface->destroy($id);
            DB::commit();
        }catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to delete user');
        }
        return "success";
    }
}
