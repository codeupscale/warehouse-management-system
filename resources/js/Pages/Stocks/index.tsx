import Sidebar from "@/Components/Sidebar";
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-react';

export default function Index({ stocks }: any) {
    function destroy(stockId: any) {
        if (confirm("Are you sure you want to delete this Stock?")) {
            Inertia.delete(route("stocks.destroy", stockId));
        }
    }

    return (
        <>
            <Sidebar />
            <div className="bg-white p-3 w-full h-screen text-sm text-left">
                <div className="flex justify-end pt-2">
                    <button className="bg-indigo-400 text-white p-1">
                        <Link href={route('stocks.create')}>Add Stock</Link>
                    </button>
                </div>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Stock name</th>
                            <th className="px-4 py-2">Warehouse name</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stocks?.map((stock: any) => {
                                return (
                                    <tr key={stock?.id}>
                                        <td className="border px-4 py-2">{stock?.name}</td>
                                        <td className="border px-4 py-2">{stock?.warehouse?.name}</td>
                                        <td className="border px-4 py-2">
                                            <div className="actions flex text-2xl">
                                                <Link href={route('stocks.edit', stock.id)}>
                                                    <button className="border bg-gray-400 py-1 px-2 text-white text-sm">Edit</button>
                                                </Link>
                                                <Link href=''>
                                                    <button className="border bg-red-400 py-1 px-2 text-white text-sm" onClick={() => destroy(stock.id)}>Remove</button>
                                                </Link>
                                                {/* <Link href={route('stockItems.index')}>
                                                    <button className="border bg-blue-400 py-1 px-2 text-white text-sm">Stock Items</button>
                                                </Link> */}
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