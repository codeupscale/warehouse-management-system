import Sidebar from "@/Components/Sidebar";
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-react';
import { useEffect } from 'react';

export default function Index({ stocks, warehouseId, allItems }: any) {
    useEffect(() => {
        console.log("Stocks", stocks)
        console.log("Warehouse id", warehouseId)
        console.log("All Items", allItems)
    }, [])

    return (
        <>
            <Sidebar />
            <div className="bg-white p-3 w-full h-screen text-sm text-left">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Stock name</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allItems?.map((item: any) => {
                                return (
                                    <tr key={item?.id}>
                                        <td className="border px-4 py-2">{item?.name}</td>
                                        <td className="border px-4 py-2">{item?.size}</td>
                                        <td className="border px-4 py-2">{item?.minimum_quantity}</td>
                                        <td className="border px-4 py-2">{item?.quantity}</td>
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