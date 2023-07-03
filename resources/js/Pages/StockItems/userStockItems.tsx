import { useEffect } from 'react';

export default function Index({ stockItems }: any) {
    useEffect(() => {
        console.log("Items", stockItems)
    }, [])

    return (
        <>
            <div className="w-full h-screen px-4 pt-3 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">Warehouses</h1>
                        <p className="mt-2 text-sm text-gray-700">A list of all the items in your warehouse including their name and warehouse name etc.</p>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>

                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Warehouse name</th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Item name</th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Size</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Minimum Quantity</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Quantity</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {
                                        stockItems?.map((item: any) => {
                                            return (
                                                <tr>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{item?.warehouse?.name}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item?.name}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item?.size}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item?.minimum_quantity}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item?.quantity}</td>
                                                    <td className="flex items-center relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                        <form method="GET" action={route('stockItem.takeout', item.id)}>
                                                            <button className="border bg-gray-400 py-1 px-2 text-white text-sm">Takeout</button>
                                                        </form>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}