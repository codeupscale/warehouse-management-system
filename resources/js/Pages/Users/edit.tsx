import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Edit({ user }: any) {
    const { data, setData, errors, put } = useForm({
        customer_name: "",
        email: "",
        profile: "",
        password: "",
        first_name: "",
        last_name: ""
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        put(route("users.update", user?.id));
    }
    useEffect(() => {
        console.log("Data", data)
        console.log("errors", errors)
    }, [data])

    return (
        <>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="mb-1">
                    <label htmlFor="customer_name" className="block mb-1">
                        Customer Name
                    </label>
                    <input
                        type="text"
                        name="customer_name"
                        id="customerName"
                        value={data.customer_name}
                        onChange={(e) => setData("customer_name", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
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
                        id="profile"
                        name="profile"
                        value={data.profile}
                        onChange={(e) => setData("profile", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="email" className="block mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="passwird"
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