// import { useForm } from "@inertiajs/react";
// import { useEffect } from "react";

// export default function Create() {
//     const { data, setData, errors, post } = useForm({
//         customer_name: "",
//         email: "",
//         profile: "",
//         password: "",
//         first_name: "",
//         last_name: ""
//     });

//     function handleSubmit(e: any) {
//         e.preventDefault();
//         post(route("users.store"));
//     }
//     useEffect(() => {
//         console.log("Data", data)
//         console.log("errors", errors)
//     }, [data])

//     return (
//         <>
//             <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
//                 <div className="mb-1">
//                     <label htmlFor="customerName" className="block mb-1">
//                         Customer Name
//                     </label>
//                     <input
//                         type="text"
//                         name="customer_name"
//                         id="customerName"
//                         value={data.customer_name}
//                         onChange={(e) => setData("customer_name", e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded"
//                         required
//                     />
//                 </div>
//                 <div className="mb-1">
//                     <label htmlFor="email" className="block mb-1">
//                         Email
//                     </label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={data.email}
//                         onChange={(e) => setData("email", e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded"
//                         required
//                     />
//                 </div>
//                 <div className="mb-1">
//                     <label htmlFor="street" className="block mb-1">
//                         Profile
//                     </label>
//                     <input
//                         type="file"
//                         id="profile"
//                         name="profile"
//                         value={data.profile}
//                         onChange={(e) => setData("profile", e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded"
//                         required
//                     />
//                 </div>
//                 <div className="mb-1">
//                     <label htmlFor="email" className="block mb-1">
//                         Password
//                     </label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="passwird"
//                         value={data.password}
//                         onChange={(e) => setData("password", e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded"
//                         required
//                     />
//                 </div>
//                 <div className="mb-1">
//                     <label htmlFor="first_name" className="block mb-1">
//                         First name
//                     </label>
//                     <input
//                         type="text"
//                         id="first_name"
//                         name="first_name"
//                         value={data.first_name}
//                         onChange={(e) => setData("first_name", e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded"
//                         required
//                     />
//                 </div>
//                 <div className="mb-1">
//                     <label htmlFor="last_name" className="block mb-1">
//                         Last name
//                     </label>
//                     <input
//                         type="text"
//                         id="last_name"
//                         name="last_name"
//                         value={data.last_name}
//                         onChange={(e) => setData("last_name", e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded"
//                         required
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//                 >
//                     Submit
//                 </button>
//             </form>
//         </>
//     )
// }





import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Create({ customers }: any) {
    const [image, setImage] = useState<File | null>(null);

    const { data, setData, errors, post, processing } = useForm({
        customer_name: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("customer_name", data.customer_name);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("first_name", data.first_name);
        formData.append("last_name", data.last_name);
        if (image) {
            formData.append("profile", image); // Use "profile" as the field name
        }
        post(route("users.store"), formData as any);
    }


    useEffect(() => {
        console.log("Data", data);
        console.log("errors", errors);
    }, [data]);

    const handleProfileImageChange = (e: any) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="mb-1">
                    <label htmlFor="customerName" className="block mb-1">
                        Customer Name
                    </label>
                    <select
                        name="customer_name"
                        id="customerName"
                        value={data.customer_name}
                        onChange={(e) => setData("customer_name", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    >
                        <option value="">Select a customer</option>
                        {customers.map((customer: any) => (
                            <option key={customer.id} value={customer.customer_name}>
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
                    <label htmlFor="profile" className="block mb-1">
                        Profile
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleProfileImageChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="password" className="block mb-1">
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
                    {processing ? "Uploading..." : "Submit"}
                </button>
            </form>
        </>
    )
}