import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
export default function Create({ customers }: any) {
    const { data, setData, errors, post } = useForm({
        name: "",
        customer_id: ""
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route("warehouses.store"));
    }
    useEffect(() => {
        console.log("Data", data)
        console.log("errors", errors)
        console.log("Customers", customers)
    }, [data])
    return (
        <>
            <form className="max-w-md mx-auto shadow-lg p-5 text-sm mt-6 h-full rounded" onSubmit={handleSubmit}>
                <div className="mb-1 w-96">
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
                <div className="mb-1 w-96">
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
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full mt-3"
                >
                    Submit
                </button>
            </form>
        </>
    )
}