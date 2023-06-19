
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from '@inertiajs/inertia-react';

export default function Index({ customers }: any) {
    function destroy(customerId: any) {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("customers.destroy", customerId));
            console.log("Customer deleted with id", customerId)
        }
    }
    return (
        <div className="bg-white w-4/5 h-screen">
            <button className="bg-indigo-400 text-white p-1">
                <Link href={route('customers.create')}>Add Customer</Link>
            </button>
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
                                                <button>Edit</button>
                                            </Link>
                                            <Link href=''>
                                                <button onClick={() => destroy(customer.id)}>Delete</button>
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
    )
}