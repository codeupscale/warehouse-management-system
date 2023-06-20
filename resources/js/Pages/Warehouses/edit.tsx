import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
export default function Edit({ warehouse, customers }: any) {
    const { data, setData, errors, put } = useForm({
        name: warehouse.name,
        customer_id: warehouse.customer_id
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        put(route("warehouses.update", warehouse?.id));
    }
    useEffect(() => {
        console.log("Data", data)
        console.log("errors", errors)
    }, [data])
    return (
        <>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="mb-1">
                    <label htmlFor="street" className="block mb-1">
                        Warehouse name
                    </label>
                    <input
                        type="text"
                        id="street"
                        name="street"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-1">
                    <select
                        name="customer_id"
                        id="customerName"
                        value={data.customer_id}
                        onChange={(e) => setData("customer_id", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    >
                        <option value="">Select a customer</option>
                        {customers?.map((customer: any) => (
                            <option key={customer.id} value={customer.id}>
                                {customer?.customer_name}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </>
    )
}