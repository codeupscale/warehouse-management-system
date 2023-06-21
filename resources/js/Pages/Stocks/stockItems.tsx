import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-react';
import { useEffect } from 'react';

export default function Index({ stockItems }: any) {
    useEffect(() => {
        console.log("Stock Items", stockItems)
    }, [])

    return (
        <div className="bg-white w-4/5 h-screen mt-6 text-sm text-left">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Item Name</th>
                        <th className="px-4 py-2">Size</th>
                        <th className="px-4 py-2">Minimum Quantity</th>
                        <th className="px-4 py-2">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stockItems?.map((item: any) => {
                            console.log("Item", item?.customer_id)
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
    )
}