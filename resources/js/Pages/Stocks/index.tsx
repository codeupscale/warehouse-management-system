import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-react';
import { useEffect } from 'react';

export default function Index({ stocks }: any) {
    function destroy(stockId: any) {
        if (confirm("Are you sure you want to delete this Stock?")) {
            Inertia.delete(route("stocks.destroy", stockId));
            console.log("Stock deleted with id", stockId)
        }
    }
    useEffect(() => {
        console.log("Stocks", stocks)
    }, [])

    return (
        <div className="bg-white w-4/5 h-screen">
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
                        <th className="px-4 py-2">Customer name</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stocks?.map((stock: any) => {
                            console.log("customer", stock?.customer_id)
                            return (
                                <tr key={stock?.id}>
                                    <td className="border px-4 py-2">{stock?.name}</td>
                                    <td className="border px-4 py-2">{stock?.warehouse?.name}</td>
                                    <td className="border px-4 py-2">{stock?.customer?.customer_name}</td>
                                    <td className="border px-4 py-2">
                                        <div className="actions flex text-2xl">
                                            <Link href={route('stocks.edit', stock.id)}>
                                                <button className="border bg-gray-400 py-1 px-2 text-white text-sm">Edit</button>
                                            </Link>
                                            <Link href=''>
                                                <button className="border bg-red-400 py-1 px-2 text-white text-sm" onClick={() => destroy(stock.id)}>Remove</button>
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