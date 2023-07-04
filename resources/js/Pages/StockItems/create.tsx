import { useForm } from "@inertiajs/react";
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
    return (
        <>
            <form className="max-w-md mx-auto shadow-lg p-5 text-sm mt-6 h-full rounded" onSubmit={handleSubmit}>
                <div className="mb-1 w-96">
                    <label htmlFor="warehouse_id" className="block text-sm font-medium leading-6 text-gray-900">Warehouse name</label>
                    <select
                        id="warehouse_id"
                        name="warehouse_id"
                        value={data.warehouse_id}
                        onChange={(e) => setData("warehouse_id", e.target.value)}
                        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                    >
                        <option value="">Select a warehouse</option>
                        {warehouses.map((warehouse: any) => (
                            <option key={warehouse?.id} value={warehouse?.id}>
                                {warehouse?.name}
                            </option>
                        ))}
                    </select>
                    {
                        errors && <span className="text-red-500">{errors?.warehouse_id}</span>
                    }
                </div>
                <div className="mb-1 w-96">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            required
                        />
                    </div>
                    {
                        errors && <span className="text-red-500">{errors?.name}</span>
                    }
                </div>
                <div className="mb-1 w-96">
                    <label htmlFor="size" className="block text-sm font-medium leading-6 text-gray-900">Size</label>
                    <div className="mt-2">
                        <input
                            type="number"
                            name="size"
                            id="size"
                            value={data.size}
                            onChange={(e) => setData("size", e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            required
                            min={0}
                        />
                    </div>
                    {
                        errors && <span className="text-red-500">{errors?.size}</span>
                    }
                </div>
                <div className="mb-1 w-96">
                    <label htmlFor="minimum_quantity" className="block text-sm font-medium leading-6 text-gray-900">Minimum Quantity</label>
                    <div className="mt-2">
                        <input
                            type="number"
                            name="minimum_quantity"
                            id="minimum_quantity"
                            value={data.minimum_quantity}
                            onChange={(e) => setData("minimum_quantity", e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            required
                            min={0}
                        />
                    </div>
                    {
                        errors && <span className="text-red-500">{errors?.minimum_quantity}</span>
                    }
                </div>
                <div className="mb-1 w-96">
                    <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">Quantity</label>
                    <div className="mt-2">
                        <input
                            type="number"
                            name="quantity"
                            id="quantity"
                            value={data.quantity}
                            onChange={(e) => setData("quantity", e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            required
                            min={0}
                        />
                    </div>
                    {
                        errors && <span className="text-red-500">{errors?.quantity}</span>
                    }
                </div>
                <button
                    type="submit"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded w-full mt-3"
                >
                    Submit
                </button>
            </form>
        </>
    )
}