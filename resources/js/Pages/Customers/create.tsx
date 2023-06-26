import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Create() {
    const { data, setData, errors, post } = useForm({
        customer_name: "",
        street: "",
        house_no: "",
        postal_code: "",
        city: "",
        country: "",
        email: "",
    });

    function handleSubmit(e:any) {
        e.preventDefault();
        post(route("customers.store"));
    }
    useEffect(() => {
      console.log("Data", data)
      console.log("errors", errors)
    }, [data, errors])
    
    return (
        <>
            <form className="max-w-md mx-auto shadow-lg p-5 text-sm mt-6 h-full rounded" onSubmit={handleSubmit}>
                <div className="mb-1 w-96">
                    <label htmlFor="customerName" className="block mb-1">
                        Customer Name
                    </label>
                    <input
                        type="text"
                        name="customer_name"
                        id="customerName"
                        value={data.customer_name}
                        onChange={(e) => setData("customer_name", e.target.value) }
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                    {
                        errors && <span className="text-red-500">{errors?.customer_name}</span>
                    }
                </div>
                <div className="mb-1 w-96">
                    <label htmlFor="street" className="block mb-1">
                        Street
                    </label>
                    <input
                        type="text"
                        id="street"
                        name="street"
                        value={data.street}
                        onChange={(e) => setData("street", e.target.value) }
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                    {
                        errors && <span className="text-red-500">{errors?.street}</span>
                    }
                </div>
                <div className="mb-1 w-96">
                    <label htmlFor="houseNo" className="block mb-1">
                        House No
                    </label>
                    <input
                        type="text"
                        id="houseNo"
                        name="house_no"
                        value={data.house_no}
                        onChange={(e) => setData("house_no", e.target.value) }
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                    {
                        errors && <span className="text-red-500">{errors?.house_no}</span>
                    }
                </div>
                <div className="mb-1 w-96">
                    <label htmlFor="postalCode" className="block mb-1">
                        Postal Code
                    </label>
                    <input
                        type="text"
                        id="postalCode"
                        name="postal_code"
                        value={data.postal_code}
                        onChange={(e) => setData("postal_code", e.target.value) }
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                    {
                        errors && <span className="text-red-500">{errors?.postal_code}</span>
                    }
                </div>
                <div className="mb-1 w-96">
                    <label htmlFor="city" className="block mb-1">
                        City
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={data.city}
                        onChange={(e) => setData("city", e.target.value) }
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                    {
                        errors && <span className="text-red-500">{errors?.city}</span>
                    }
                </div>
                <div className="mb-1 w-96">
                    <label htmlFor="country" className="block mb-1">
                        Country
                    </label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={data.country}
                        onChange={(e) => setData("country", e.target.value) }
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                    {
                        errors && <span className="text-red-500">{errors?.country}</span>
                    }
                </div>
                <div className="mb-1 w-96">
                    <label htmlFor="email" className="block mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value) }
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                    {
                        errors && <span className="text-red-500">{errors?.email}</span>
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