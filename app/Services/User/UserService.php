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
     * UserService constructor.
     *
     * @param UserInterface $userInterface
     */
    public function __construct(UserInterface $userInterface)
    {
        $this->userInterface = $userInterface;
    }

    public function index()
    {
        try {
            $users =  $this->userInterface->index();
            return $users;
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
            $input['type'] = config('constants.actor.user');
            $input['show_password'] = $request->password;
            $input['image'] = userImage($request->image, 'User-Picture');
            $input = Arr::except($input,['_token']);
            $user = $this->userInterface->create($input);
            DB::commit();
            return $user;
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to create user');
        }
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
    }
    public function update(Request $request, $id)
    {
        try {
            DB::beginTransaction();
            $input = $request->all();
            $input['show_password'] = $request->password;
            if(isset($input['image'])) {
                $input['image'] = userImage($request->image, 'User-Picture');
            }
            $user = $this->userInterface->update($input, $id);

            DB::commit();
            return $user;
        } catch (Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
            throw new InvalidArgumentException('Unable to update user');
        }
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
    }
}
