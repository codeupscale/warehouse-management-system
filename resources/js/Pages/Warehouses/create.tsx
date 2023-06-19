import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Select from "react-select";
export default function Create({ customers }: any) {
    const { data, setData, errors, post } = useForm({
        name: "",
        customer_name: ""
    });
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectChange = (selectedOptions: any) => {
        setSelectedOptions(selectedOptions);
    };

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route("warehouses.store"));
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
                    {/* <select
                        name="customer_name"
                        id="customerName"
                        value={data.customer_name}
                        onChange={(e) => setData("customer_name", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    >
                        <option value="">Select a customer</option>
                        {customers?.map((customer: any) => (
                            <option key={customer.id} value={customer.customer_name}>
                                {customer?.customer_name}
                            </option>
                        ))}
                    </select> */}
                    <Select
                        options={customers}
                        value={selectedOptions}
                        onChange={handleSelectChange}
                        isMulti
                    />
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