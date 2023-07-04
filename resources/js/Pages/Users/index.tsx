import Sidebar from "@/Components/Sidebar";
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import { useState } from "react";

export default function Index({ users }: any) {
    const [showPasswords, setShowPasswords] = useState<{ [key: number]: boolean }>({});
    function destroy(userId: any) {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("users.destroy", userId));
        }
    }

    const togglePassword = (userId: number) => {
        setShowPasswords((prevState) => ({
            ...prevState,
            [userId]: !prevState[userId],
        }));
    };

    return (
        <>
            <Sidebar />
            <div className="w-full px-4 pt-3 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
                        <p className="mt-2 text-sm text-gray-700">A list of all the users in your account including their username, name, password and profile etc.</p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button type="button" className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><Link href={route('users.create')}>Add User</Link></button>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>

                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">First name</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Last name</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Username</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Password</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Profile</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Customer</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {
                                        users?.map((user: any) => {
                                            const isPasswordVisible = showPasswords[user?.id] || false;
                                            return (
                                                <tr key={user?.id}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{user?.first_name}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user?.last_name}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user?.email}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{isPasswordVisible ? (
                                                        user?.show_password
                                                    ) : (
                                                        "*******"
                                                    )}
                                                        <button
                                                            className="ml-3 text-sm"
                                                            onClick={() => togglePassword(user?.id)}
                                                        >
                                                            {isPasswordVisible ? 'Hide' : 'Show'}
                                                        </button>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <img className="w-20 h-20 rounded-full" src={`/images/User-Picture/${user?.image}`} alt="profile" />
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user?.customer?.customer_name}</td>
                                                    <td className=" whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-0">
                                                        <Link href={route('users.edit', user.id)} className="text-indigo-600">
                                                            Edit
                                                        </Link>
                                                        <span>
                                                            <button className="py-1 px-2 text-red-600 text-sm" onClick={() => destroy(user.id)}>Remove</button>
                                                        </span>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}