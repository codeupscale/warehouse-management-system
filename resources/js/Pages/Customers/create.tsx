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

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route("customers.store"));
    }
    useEffect(() => {
        console.log("Data", data)
        console.log("errors", errors)
    }, [data, errors])

    return (
        <>
            <form className="max-w-md mx-auto mb-6 shadow-lg p-5 text-sm mt-6 h-full rounded" onSubmit={handleSubmit}>
                <div className="mb-1 w-96">
                    <label htmlFor="customerName" className="block text-sm font-medium leading-6 text-gray-900">Customer name</label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="customer_name"
                            id="customerName"
                            value={data.customer_name}
                            onChange={(e) => setData("customer_name", e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            required
                        />
                    </div>
                    {
                        errors && <span className="text-red-500">{errors?.customer_name}</span>
                    }
                </div>
                <div className="mb-1 w-96">
                    <label htmlFor="street" className="block text-sm font-medium leading-6 text-gray-900">Street</label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="street"
                            id="street"
                            value={data.street}
                            onChange={(e) => setData("street", e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            required
                        />
                    </div>
                    {
                        errors && <span className="text-red-500">{errors?.street}</span>
                    }
                </div>
                <div className="mb-1 w-96">
                    <label htmlFor="houseNo" className="block text-sm font-medium leading-6 text-gray-900">House no</label>
                    <div className="mt-2">
                        <input type="text" name="house_no" id="houseNo" value={data.house_no} onChange={(e) => setData("house_no", e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                    </div>
                    {
                        errors && <span className="text-red-500">{errors?.house_no}</span>
                    }
                </div>
                <div className="mb-1 w-96">
                    <label htmlFor="postalCode" className="block text-sm font-medium leading-6 text-gray-900">Postal code</label>
                    <div className="mt-2">
                        <input type="text" name="postal_code" id="postalCode" value={data.postal_code} onChange={(e) => setData("postal_code", e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                    </div>
                    {
                        errors && <span className="text-red-500">{errors?.postal_code}</span>
                    }
                </div>
                <div className="mb-1 w-96">
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                    <div className="mt-2">
                        <input type="text" name="city" id="city" value={data.city} onChange={(e) => setData("city", e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                    </div>
                    {
                        errors && <span className="text-red-500">{errors?.city}</span>
                    }
                </div>
                <div className="mb-1 w-96">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                    <div className="mt-2">
                        <input type="text" name="country" id="country" value={data.country} onChange={(e) => setData("country", e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                    </div>
                    {
                        errors && <span className="text-red-500">{errors?.country}</span>
                    }
                </div>
                <div className="mb-1 w-96">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <div className="mt-2">
                        <input type="email" name="email" id="email" value={data.email} onChange={(e) => setData("email", e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                    </div>
                    {
                        errors && <span className="text-red-500">{errors?.email}</span>
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