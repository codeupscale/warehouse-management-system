import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
export default function Edit({ stocks, stockItem }: any) {
    const { data, setData, errors, put } = useForm({
        stock_id: stockItem.stock_id,
        name: stockItem.name,
        size: stockItem.size,
        minimum_quantity: stockItem.minimum_quantity,
        quantity: stockItem.quantity,
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        put(route("stockItems.update", stockItem.id));
    }
    useEffect(() => {
        console.log("Data", data)
        console.log("errors", errors)
        console.log("Stocks", stocks)
    }, [data, errors])
    return (
        <>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="mb-1">
                    <select
                        name="stock_id"
                        id="stock_id"
                        value={data.stock_id}
                        onChange={(e) => setData("stock_id", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    >
                        <option value="">Select a Stock</option>
                        {stocks?.map((stock: any) => (
                            <option key={stock.id} value={stock.id}>
                                {stock?.name}
                            </option>
                        ))}
                    </select>
                    {
                        errors && <span className="text-red-500">{errors?.stock_id}</span>
                    }
                </div>
                <div className="mb-1">
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
                    {
                        errors && <span className="text-red-500">{errors?.name}</span>
                    }
                </div>
                <div className="mb-1">
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
                    {
                        errors && <span className="text-red-500">{errors?.size}</span>
                    }
                </div>
                <div className="mb-1">
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
                    {
                        errors && <span className="text-red-500">{errors?.minimum_quantity}</span>
                    }
                </div>
                <div className="mb-1">
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
                    {
                        errors && <span className="text-red-500">{errors?.quantity}</span>
                    }
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