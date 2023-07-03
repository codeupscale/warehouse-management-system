import { useEffect } from 'react';
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-react';
import Sidebar from "@/Components/Sidebar";

export default function Index({ stocks, warehouses, allItems }: any) {
    function destroy(itemId: any) {
        if (confirm("Are you sure you want to delete this Item?")) {
            Inertia.delete(route("stockItems.destroy", itemId));
            console.log("Item deleted with id", itemId)
        }
    }
    useEffect(() => {
        console.log("Stocks", stocks)
        console.log("Warehouses", warehouses)
        console.log("All Items", allItems)
    }, [])

    return (
        <>
            <Sidebar />
            <div className="bg-white p-3 w-full h-screen text-sm text-left">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Warehouse name</th>
                            <th className="px-4 py-2">Item name</th>
                            <th className="px-4 py-2">Size</th>
                            <th className="px-4 py-2">Minimum Quantity</th>
                            <th className="px-4 py-2">Quantity</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allItems?.map((item: any) => {
                                console.log("item ", item)
                                return (
                                    <tr key={item?.id}>
                                        <td className="border px-4 py-2">{item?.warehouse?.name}</td>
                                        <td className="border px-4 py-2">{item?.name}</td>
                                        <td className="border px-4 py-2">{item?.size}</td>
                                        <td className="border px-4 py-2">{item?.minimum_quantity}</td>
                                        <td className="border px-4 py-2">{item?.quantity}</td>
                                        <td className="flex items-center relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <Link href={route('stockItems.edit', item.id)} className="text-indigo-600">
                                                Edit
                                            </Link>
                                            <div>
                                                <button className="py-1 px-2 text-red-600 text-sm" onClick={() => destroy(item.id)}>Remove</button>
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