import Sidebar from "@/Components/Sidebar";
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-react';
import { useEffect } from 'react';

export default function Index({ stockItems }: any) {
    useEffect(() => {
        console.log("Items", stockItems)
    }, [])

    return (
        <>
            <Sidebar />
            <div className="bg-white w-4/5 h-screen">
                <div className="flex justify-end pt-2">
                    <button className="bg-indigo-400 text-white p-1">
                        <Link href={route('stockItems.create')}>Add Item</Link>
                    </button>
                </div>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Stock name</th>
                            <th className="px-4 py-2">Item Name</th>
                            <th className="px-4 py-2">Size</th>
                            <th className="px-4 py-2">Minimum Quantity</th>
                            <th className="px-4 py-2">Quantity</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stockItems?.map((item: any) => {
                                console.log("Item", item?.customer_id)
                                return (
                                    <tr key={item?.id}>
                                        <td className="border px-4 py-2">{item?.stock?.name}</td>
                                        <td className="border px-4 py-2">{item?.name}</td>
                                        <td className="border px-4 py-2">{item?.size}</td>
                                        <td className="border px-4 py-2">{item?.minimum_quantity}</td>
                                        <td className="border px-4 py-2">{item?.quantity}</td>
                                        <td className="border px-4 py-2">
                                            <div className="actions flex text-2xl">
                                                <Link href={route('stockItem.takeout', item.id)}>
                                                    <button className="border bg-gray-400 py-1 px-2 text-white text-sm">Takeout</button>
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