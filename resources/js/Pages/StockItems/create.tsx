import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
export default function Create({ warehouses }: any) {
    const { data, setData, errors, post } = useForm({
        warehouse_id: "",
        name: "",
        size: "",
        minimum_quantity: "",
        quantity: "",
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route("stockItems.store"));
    }
    useEffect(() => {
        console.log("Data", data)
        console.log("errors", errors)
        console.log("warehouses", warehouses)
    }, [data])
    return (
        <>
            <form className="max-w-md mx-auto shadow-lg p-5 text-sm mt-6 h-full rounded" onSubmit={handleSubmit}>
                <div className="mb-1 w-96">
                    <select
                        name="stock_id"
                        id="stock_id"
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
                <div className="mb-1 w-96">
                    <label htmlFor="name" className="block mb-1">
                        Item name
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
                    <label htmlFor="name" className="block mb-1">
                        Size
                    </label>
                    <input
                        type="number"
                        id="size"
                        name="size"
                        value={data.size}
                        onChange={(e) => setData("size", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-1 w-96">
                    <label htmlFor="name" className="block mb-1">
                        Minimum Quantity
                    </label>
                    <input
                        type="number"
                        id="minimum_quantity"
                        name="minimum_quantity"
                        value={data.minimum_quantity}
                        onChange={(e) => setData("minimum_quantity", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-1 w-96">
                    <label htmlFor="name" className="block mb-1">
                        Quantity
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={data.quantity}
                        onChange={(e) => setData("quantity", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
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