import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
import axios from "axios";

export default function Create({ customers }: any) {
    const { data, setData, errors, post } = useForm({
        customer_id: "",
        email: "",
        image: null,
        password: "",
        first_name: "",
        last_name: ""
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('data', JSON.stringify({
                customer_name: data.customer_id, image:data.image , email: data.email, password: data.password, first_name: data.first_name, last_name: data.last_name
            }));
            // formData.append('files.image', data.image)
            post(route("users.store"));
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        console.log("Data", data)
        console.log("errors", errors)
    }, [data])

    return (
        <>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="mb-1">
                    <label htmlFor="customerName" className="block mb-1">
                        Customer Name
                    </label>
                    <select
                        name="customer_id"
                        id="customerName"
                        value={data.customer_id}
                        onChange={(e) => setData("customer_id", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    >
                        <option value="">Select a customer</option>
                        {customers.map((customer: any) => (
                            <option key={customer.id} value={customer.id}>
                                {customer.customer_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-1">
                    <label htmlFor="email" className="block mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="street" className="block mb-1">
                        Profile
                    </label>
                    <input 
                    type="file" 
                    name="image"
                    id="file"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    // value={data.image} 
                    required
                    onChange={(e:any) => setData('image', e.target.files[0])} />

                </div>
                <div className="mb-1">
                    <label htmlFor="email" className="block mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="first_name" className="block mb-1">
                        First name
                    </label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={data.first_name}
                        onChange={(e) => setData("first_name", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="last_name" className="block mb-1">
                        Last name
                    </label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={data.last_name}
                        onChange={(e) => setData("last_name", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
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