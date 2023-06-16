import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { usePage } from '@inertiajs/inertia-react';

export default function Index() {
    const { customers } = usePage().props
    console.log("Customer ", customers)

    return (
        <div className="bg-white w-4/5 h-screen">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Customer name</th>
                        <th className="px-4 py-2">Street</th>
                        <th className="px-4 py-2">House no</th>
                        <th className="px-4 py-2">Postal Code</th>
                        <th className="px-4 py-2">City</th>
                        <th className="px-4 py-2">Country</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">John</td>
                        <td className="border px-4 py-2">3</td>
                        <td className="border px-4 py-2">286</td>
                        <td className="border px-4 py-2">111</td>
                        <td className="border px-4 py-2">Georgia</td>
                        <td className="border px-4 py-2">America</td>
                        <td className="border px-4 py-2">john@gmail.com</td>
                        <td className="border px-4 py-2">
                            <div className="actions flex text-2xl">
                                <BiEdit />
                                <AiFillDelete />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}