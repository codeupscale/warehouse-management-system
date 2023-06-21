import Sidebar from "@/Components/Sidebar";
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from '@inertiajs/inertia-react';

export default function Index({ users }: any) {
    function destroy(userId: any) {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("users.destroy", userId));
            console.log("User deleted with id", userId)
        }
    }
    return (
        <>
            <Sidebar />
            <div className="bg-white w-4/5 h-screen">
                <div className="flex justify-end pt-2">
                    <button className="bg-indigo-400 text-white p-1">
                        <Link href={route('users.create')}>Add User</Link>
                    </button>
                </div>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Customer Id</th>
                            <th className="px-4 py-2">Username</th>
                            <th className="px-4 py-2">Profile</th>
                            <th className="px-4 py-2">Password</th>
                            <th className="px-4 py-2">First name</th>
                            <th className="px-4 py-2">Last name</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user: any) => {
                                return (
                                    <tr key={user?.id}>
                                        <td className="border px-4 py-2">{user?.customer_name}</td>
                                        <td className="border px-4 py-2">{user?.street}</td>
                                        <td className="border px-4 py-2">{user?.house_no}</td>
                                        <td className="border px-4 py-2">{user?.postal_code}</td>
                                        <td className="border px-4 py-2">{user?.city}</td>
                                        <td className="border px-4 py-2">{user?.country}</td>
                                        <td className="border px-4 py-2">{user?.email}</td>
                                        <td className="border px-4 py-2">
                                            <div className="actions flex text-2xl">
                                                <Link href={route('users.edit', user.id)}>
                                                    <button className="border bg-gray-400 py-1 px-2 text-white text-sm">Edit</button>
                                                </Link>
                                                <Link href=''>
                                                    <button className="border bg-red-400 py-1 px-2 text-white text-sm" onClick={() => destroy(user.id)}>Remove</button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}