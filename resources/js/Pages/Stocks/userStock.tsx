import Sidebar from "@/Components/Sidebar";
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-react';
import { useEffect } from 'react';

export default function UserStock({ allUserStocks }: any) {
    useEffect(() => {
        console.log("Stocks", allUserStocks)
    }, [])

    return (
        <>
            <Sidebar />
            <div className="bg-white w-4/5 h-screen mt-6 text-sm text-left">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Stock name</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUserStocks?.map((stock: any) => {
                                console.log("customer", stock?.customer_id)
                                return (
                                    <tr key={stock?.id}>
                                        <td className="border px-4 py-2">{stock?.name}</td>
                                        <td className="border px-4 py-2">
                                            <div className="actions flex text-2xl">
                                                <Link href={route('user.stockItem', stock?.id)}>
                                                    <button className="border bg-blue-400 py-1 px-2 text-white text-sm">Stock Items</button>
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