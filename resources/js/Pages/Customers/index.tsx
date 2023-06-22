
import Sidebar from "@/Components/Sidebar";
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-react';

export default function Index({ customers }: any) {
    function destroy(customerId: any) {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("customers.destroy", customerId));
            console.log("Customer deleted with id", customerId)
        }
    }
    return (
        <>
            <Sidebar />
            <div className="bg-white p-3 w-full h-screen text-sm text-left">
                <div className="flex justify-end pt-2">
                    <button className="bg-indigo-400 text-white p-1">
                        <Link href={route('customers.create')}>Add Customer</Link>
                    </button>
                </div>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Customer name</th>
                            <th className="px-4 py-2">Street</th>
                            <th className="px-4 py-2">House no</th>
                            <th className="px-4 py-2">Postal Code</th>
                            <th className="px-4 py-2">City</th>
                            <th className="px-4 py-2">Country</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers?.map((customer: any) => {
                                return (
                                    <tr key={customer?.id}>
                                        <td className="border px-4 py-2">{customer?.customer_name}</td>
                                        <td className="border px-4 py-2">{customer?.street}</td>
                                        <td className="border px-4 py-2">{customer?.house_no}</td>
                                        <td className="border px-4 py-2">{customer?.postal_code}</td>
                                        <td className="border px-4 py-2">{customer?.city}</td>
                                        <td className="border px-4 py-2">{customer?.country}</td>
                                        <td className="border px-4 py-2">{customer?.email}</td>
                                        <td className="border px-4 py-2">
                                            <div className="actions flex text-2xl">
                                                <Link href={route('customers.edit', customer.id)}>
                                                    <button className="border bg-gray-400 py-1 px-2 text-white text-sm">Edit</button>
                                                </Link>
                                                <Link href=''>
                                                    <button className="border bg-red-400 py-1 px-2 text-white text-sm" onClick={() => destroy(customer.id)}>Delete</button>
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