import { useForm } from "@inertiajs/react";
export default function Edit({ warehouse, customers }: any) {
    const { data, setData, errors, put } = useForm({
        name: warehouse.name,
        customer_id: warehouse.customer_id
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        put(route("warehouses.update", warehouse?.id));
    }
    return (
        <>
            <form className="max-w-md mx-auto shadow-lg p-5 text-sm mt-6 h-full rounded" onSubmit={handleSubmit}>
                <div className="mb-1 w-96">
                    <label htmlFor="warehouse_name" className="block text-sm font-medium leading-6 text-gray-900">Warehouse name</label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="name"
                            id="warehouse_name"
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
                    <label htmlFor="customerName" className="block text-sm font-medium leading-6 text-gray-900">Customer name</label>
                    <select
                        id="customerName"
                        name="customer_id"
                        value={data.customer_id}
                        onChange={(e) => setData("customer_id", e.target.value)}
                        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                    >
                        <option value="">Select a customer</option>
                        {customers.map((customer: any) => (
                            <option key={customer.id} value={customer.id}>
                                {customer.customer_name}
                            </option>
                        ))}
                    </select>
                    {
                        errors && <span className="text-red-500">{errors?.customer_id}</span>
                    }
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