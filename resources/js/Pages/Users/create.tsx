import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
import axios from "axios";

export default function Create({ customers }: any) {
    const { data, setData, errors, post } = useForm({
        customer_id: "",
        email: "",
        image: "",
        password: "",
        first_name: "",
        last_name: ""
    });

    // function handleSubmit(e: any) {
    //     e.preventDefault();
    //     try {
    //         const formData = new FormData();
    //         formData.append('data', JSON.stringify({
    //             customer_name: data.customer_name, email: data.email, password: data.password, first_name: data.first_name, last_name: data.last_name
    //         }));
    //         formData.append('files.profile', data.profile)
    //         const res = post(route("users.store"), formData);
    //         console.log("res", res)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    async function handleSubmit(e: any) {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("customer_id", data.customer_id);
            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("first_name", data.first_name);
            formData.append("last_name", data.last_name);
            formData.append("image", data.image.toString());

            const res = await axios.post(route("users.store"), formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("res", res);
        } catch (error) {
            console.log(error);
        }
    }

    // const handleChange = (e: any) => {
    //     e.target.values
    // }
    const handleChange = (e: any) => {
        setData(e.target.name, e.target.value);
    };

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
                    {/* <input 
                    type="file" 
                    name="profile"
                    id="file"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    value={data.profile} 
                    required
                    onChange={(e:any) => setData('profile', e.target.files[0])} /> */}
                    <input
                        name="image"
                        type="file"
                        onChange={(event: any) => {
                            const file = event.currentTarget.files[0];
                            handleChange({ target: { name: "image", value: file } });
                        }}
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





// import { useForm } from "@inertiajs/react";
// import { useEffect, useState } from "react";

// export default function Create({ customers }: any) {

//     const { data, setData, errors, post, processing } = useForm({
//         customer_name: "",
//         email: "",
//         password: "",
//         first_name: "",
//         last_name: "",
//     });

//     function handleSubmit(e: any) {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append("customer_name", data.customer_name);
//         formData.append("email", data.email);
//         formData.append("password", data.password);
//         formData.append("first_name", data.first_name);
//         formData.append("last_name", data.last_name);
//         post(route("users.store"), formData as any);
//     }


//     useEffect(() => {
//         console.log("Data", data);
//         console.log("errors", errors);
//     }, [data]);

//     return (
//         <>
//             <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
//                 <div className="mb-1">
//                     <label htmlFor="customerName" className="block mb-1">
//                         Customer Name
//                     </label>
//                     <select
//                         name="customer_name"
//                         id="customerName"
//                         value={data.customer_name}
//                         onChange={(e) => setData("customer_name", e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded"
//                         required
//                     >
//                         <option value="">Select a customer</option>
//                         {customers.map((customer: any) => (
//                             <option key={customer.id} value={customer.customer_name}>
//                                 {customer.customer_name}
//                             </option>
//                         ))}
//                     </select>
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
//                     <label htmlFor="profile" className="block mb-1">
//                         Profile
//                     </label>
//                     <input
//                         type="file"
//                         id="image"
//                         name="image"
//                         className="w-full px-3 py-2 border border-gray-300 rounded"
//                         required
//                     />
//                 </div>
//                 <div className="mb-1">
//                     <label htmlFor="password" className="block mb-1">
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
//                     {processing ? "Uploading..." : "Submit"}
//                 </button>
//             </form>
//         </>
//     )
// }