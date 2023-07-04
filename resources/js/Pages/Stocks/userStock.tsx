import Sidebar from "@/Components/Sidebar";
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-react';

export default function UserStock({ allUserStocks }: any) {
    return (
        <>
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
                            allUserStocks?.map((stock: any) => {
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