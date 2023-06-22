import { InertiaLink } from '@inertiajs/inertia-react';

export default function Sidebar() {
    return (
        <div className="flex flex-col h-auto w-52 bg-gray-800 text-white">
            <nav className="flex-1 px-4 py-6">
                <ul className="space-y-2">
                    <li>
                        <InertiaLink href="/customers" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                                <path d="M10 2C6.69161 2 4 4.69161 4 8C4 10.6812 5.39492 13.1647 7.61777 14.5581L8.38197 14.9119C9.24705 15.2387 10.2529 15.2387 11.118 14.9119L11.8822 14.5581C14.1051 13.1647 15.5 10.6812 15.5 8C15.5 4.69161 12.8084 2 9.5 2H10ZM10 3C12.4142 3 14.5 5.08579 14.5 7.5C14.5 9.91421 12.4142 12 10 12C7.58579 12 5.5 9.91421 5.5 7.5C5.5 5.08579 7.58579 3 10 3ZM10 4C7.51472 4 5.5 6.01472 5.5 8.5C5.5 10.9853 7.51472 13 10 13C12.4853 13 14.5 10.9853 14.5 8.5C14.5 6.01472 12.4853 4 10 4Z"></path>
                            </svg>
                            <span>Customers</span>
                        </InertiaLink>
                    </li>
                    <li>
                        <InertiaLink href="/users" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2 4C2 2.89543 2.89543 2 4 2H12C13.1046 2 14 2.89543 14 4V16C14 17.1046 13.1046 18 12 18H4C2.89543 18 2 17.1046 2 16V4ZM12 4H8C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6H12C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4ZM8 8C7.44772 8 7 8.44772 7 9C7 9.55228 7.44772 10 8 10H12C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8H8ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H12C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12H8Z"></path>
                            </svg>
                            <span>Users</span>
                        </InertiaLink>
                    </li>
                    <li>
                    <li>
                        <InertiaLink href="/warehouses" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                                <path d="M7 2H4C2.89543 2 2 2.89543 2 4V17C2 18.1046 2.89543 19 4 19H16C17.1046 19 18 18.1046 18 17V4C18 2.89543 17.1046 2 16 2H13V1C13 0.447715 12.5523 0 12 0H8C7.44772 0 7 0.447715 7 1V2ZM13 4H16V17H4V4H7V6C7 6.55228 7.44772 7 8 7H12C12.5523 7 13 6.55228 13 6V4Z"></path>
                            </svg>
                            <span>Warehouses</span>
                        </InertiaLink>
                    </li>
                        <InertiaLink href="/stocks" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                                <path d="M10 2C6.69161 2 4 4.69161 4 8C4 10.6812 5.39492 13.1647 7.61777 14.5581L8.38197 14.9119C9.24705 15.2387 10.2529 15.2387 11.118 14.9119L11.8822 14.5581C14.1051 13.1647 15.5 10.6812 15.5 8C15.5 4.69161 12.8084 2 9.5 2H10ZM10 3C12.4142 3 14.5 5.08579 14.5 7.5C14.5 9.91421 12.4142 12 10 12C7.58579 12 5.5 9.91421 5.5 7.5C5.5 5.08579 7.58579 3 10 3ZM10 4C7.51472 4 5.5 6.01472 5.5 8.5C5.5 10.9853 7.51472 13 10 13C12.4853 13 14.5 10.9853 14.5 8.5C14.5 6.01472 12.4853 4 10 4Z"></path>
                            </svg>
                            <span>Stocks</span>
                        </InertiaLink>
                    </li>
                    <li>
                        <InertiaLink href="/stockItems" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                            <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                                <path d="M10 2C6.69161 2 4 4.69161 4 8C4 10.6812 5.39492 13.1647 7.61777 14.5581L8.38197 14.9119C9.24705 15.2387 10.2529 15.2387 11.118 14.9119L11.8822 14.5581C14.1051 13.1647 15.5 10.6812 15.5 8C15.5 4.69161 12.8084 2 9.5 2H10ZM10 3C12.4142 3 14.5 5.08579 14.5 7.5C14.5 9.91421 12.4142 12 10 12C7.58579 12 5.5 9.91421 5.5 7.5C5.5 5.08579 7.58579 3 10 3ZM10 4C7.51472 4 5.5 6.01472 5.5 8.5C5.5 10.9853 7.51472 13 10 13C12.4853 13 14.5 10.9853 14.5 8.5C14.5 6.01472 12.4853 4 10 4Z"></path>
                            </svg>
                            <span>Stock Items</span>
                        </InertiaLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
