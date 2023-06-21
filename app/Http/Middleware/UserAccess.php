<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        if(auth()->user()->type == config('constants.actor.admin')){
            return $next($request);
        }
        if(auth()->user()->type == config('constants.actor.user')){
            return $next($request);
        }

        return response()->json(['You do not have permission to access for this page.']);
    }
}
