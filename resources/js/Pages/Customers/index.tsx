
import Sidebar from "@/Components/Sidebar";
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-react';

export default function Index({ customers }: any) {
    function destroy(customerId: any) {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("customers.destroy", customerId));
        }
    }
    return (
        <>
            <Sidebar />
            <div className="w-full px-4 pt-3 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">Customers</h1>
                        <p className="mt-2 text-sm text-gray-700">A list of all the customers in your account including their name, street, and email etc.</p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button type="button" className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><Link href={route('customers.create')}>Add Customer</Link></button>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>

                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Customer name</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Street</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">House no</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Postal Code</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">City</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Country</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {
                                        customers?.map((customer: any) => {
                                            return (
                                                <tr key={customer?.id}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{customer?.customer_name}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{customer?.street}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{customer?.house_no}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{customer?.postal_code}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{customer?.city}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{customer?.country}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{customer?.email}</td>
                                                    <td className="flex items-center relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                        <Link href={route('customers.edit', customer.id)} className="text-indigo-600">
                                                            Edit
                                                        </Link>
                                                        <div>
                                                            <button className="py-1 px-2 text-red-600 text-sm" onClick={() => destroy(customer.id)}>Remove</button>
                                                        </div>
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