import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Edit({ customers, user }: any) {
    const { data, setData, errors, post } = useForm({
        customer_id: user.customer_id,
        email: user.email,
        image: user.image,
        password: user.password,
        first_name: user.first_name,
        last_name: user.last_name
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('data', JSON.stringify({
                customer_name: data.customer_id, image: data.image, email: data.email, password: data.password, first_name: data.first_name, last_name: data.last_name
            }));
            // formData.append('files.image', data.image)
            post(route("users.update", user.id));
        } catch (error) {
            console.log("your error", error)
        }
    }


    useEffect(() => {
        console.log("Data", data)
        console.log("errors", errors)
        console.log("User image", user?.image)
    }, [data])

    return (
        <>
            <form className="max-w-md w-full mx-auto mb-6 shadow-lg p-5 text-sm mt-6 h-full rounded" onSubmit={handleSubmit}>
                <div className="mb-1">
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
                <div className="mb-1">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <div className="mt-2">
                        <input type="email" name="email" id="email" value={data.email} onChange={(e) => setData("email", e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                    </div>
                    {
                        errors && <span className="text-red-500">{errors?.email}</span>
                    }
                </div>
                <div className="mb-1">
                    <div className="text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                        </svg>
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                <span>Upload a file</span>
                                <input id="file-upload" name="image" type="file" className="sr-only" onChange={(e: any) => setData('image', e.target.files[0])} required />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF</p>
                        {data?.image ? <img src={`/images/User-Picture/${user?.image}`} alt="previous" /> : null}
                    </div>
                    {
                        errors && <span className="text-red-500">{errors?.image}</span>
                    }
                </div>
                <div className="mb-1">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div className="mt-2">
                        <input type="password" name="password" id="password" value={data.password} onChange={(e) => setData("password", e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                    </div>
                    {
                        errors && <span className="text-red-500">{errors?.password}</span>
                    }
                </div>
                <div className="mb-1">
                    <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                    <div className="mt-2">
                        <input type="text" name="first_name" id="first_name" value={data.first_name} onChange={(e) => setData("first_name", e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                    </div>
                    {
                        errors && <span className="text-red-500">{errors?.first_name}</span>
                    }
                </div>
                <div className="mb-1">
                    <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                    <div className="mt-2">
                        <input type="text" name="last_name" id="last_name" value={data.last_name} onChange={(e) => setData("last_name", e.target.value)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                    </div>
                    {
                        errors && <span className="text-red-500">{errors?.last_name}</span>
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