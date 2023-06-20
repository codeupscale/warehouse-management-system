import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-react';
import { useEffect } from 'react';

export default function Index({ warehouses }: any) {
    function destroy(warehouseId: any) {
        if (confirm("Are you sure you want to delete this Warehouse?")) {
            Inertia.delete(route("warehouses.destroy", warehouseId));
            console.log("Warehouse deleted with id", warehouseId)
        }
    }
    useEffect(() => {
      console.log("Warehouses", warehouses)
    }, [])
    
    return (
        <div className="bg-white w-4/5 h-screen">
            <button className="bg-indigo-400 text-white p-1">
                <Link href={route('warehouses.create')}>Add Warehouse</Link>
            </button>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Warehouse name</th>
                        <th className="px-4 py-2">Customer's name</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        warehouses?.map((warehouse: any) => {
                            console.log("customer", warehouse?.customer_id)
                            return (
                                <tr key={warehouse?.id}>
                                    <td className="border px-4 py-2">{warehouse?.name}</td>
                                    <td className="border px-4 py-2">{warehouse?.customer?.customer_name}</td>
                                    <td className="border px-4 py-2">
                                        <div className="actions flex text-2xl">
                                            <Link href={route('warehouses.edit', warehouse.id)}>
                                                <button className="border bg-gray-400 py-1 px-2 text-white text-sm">Edit</button>
                                            </Link>
                                            <Link href=''>
                                                <button className="border bg-red-400 py-1 px-2 text-white text-sm" onClick={() => destroy(warehouse.id)}>Remove</button>
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