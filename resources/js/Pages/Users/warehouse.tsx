import Sidebar from "@/Components/Sidebar";
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-react';
import { useEffect } from 'react';

export default function Warehouse({ customerWarehouses }: any) {
    useEffect(() => {
        console.log("Warehouses", customerWarehouses)
    }, [])

    return (
        <>
            <Sidebar />
            <div className="bg-white w-4/5 h-screen mt-6 text-sm text-left">
                
                <table className="table-auto w-full text-left">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Warehouse name</th>
                            <th className="px-4 py-2">Customer's name</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customerWarehouses?.map((warehouse: any) => {
                                console.log("customer", warehouse?.customer_id)
                                return (
                                    <tr key={warehouse?.id}>
                                        <td className="border px-4 py-2">{warehouse?.name}</td>
                                        <td className="border px-4 py-2">{warehouse?.customer?.customer_name}</td>
                                        <td className="border px-4 py-2">
                                            <div className="actions flex text-2xl">
                                                <Link href={route('user.stock', warehouse.id)}>
                                                    <button className="border bg-gray-400 py-1 px-2 text-white text-sm">Stocks</button>
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