import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
export default function Create({ customers, warehouses }: any) {
    const { data, setData, errors, post } = useForm({
        name: "",
        warehouse_id: "",
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route("stocks.store"));
    }
    useEffect(() => {
        console.log("Data", data)
        console.log("errors", errors)
        console.log("Customers", customers)
        console.log("Warehouses", warehouses)
    }, [data])
    return (
        <>
            <form className="max-w-md mx-auto shadow-lg p-5 text-sm mt-6 h-full rounded" onSubmit={handleSubmit}>
                <div className="mb-1 w-96">
                    <label htmlFor="street" className="block mb-1">
                        Stock name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-1 w-96">
                    <select
                        name="warehouse_id"
                        id="warehouseName"
                        value={data.warehouse_id}
                        onChange={(e) => setData("warehouse_id", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    >
                        <option value="">Select a warehouse</option>
                        {warehouses?.map((warehouse: any) => (
                            <option key={warehouse.id} value={warehouse.id}>
                                {warehouse?.name}
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