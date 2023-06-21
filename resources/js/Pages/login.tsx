import { PageProps } from '@/types';

export default function Login({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <div className="container mx-auto">
                <div className="signup-text mt-10 p-10 text-center">
                    <div className="text-4xl mb-5">Login</div>
                    <div className="form_bg-img">
                        <div className="lg:w-4/12 mx-auto relative">
                            <div className="bg-signup-img">
                                <div className="bg-white">
                                    <form>
                                        <div className="login-form shadow-lg p-10 mx-auto rounded-sm">
                                            <input
                                                className="w-full border border-blue-400 rounded-sm p-0 my-1 py-1 px-1 outline-none"
                                                required
                                                name="username"
                                                placeholder="Username"
                                            />
                                            <input
                                                className="w-full border border-blue-400 rounded-sm p-0 my-1 py-1 px-1 outline-none"
                                                required
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                            />
                                            <div className="mt-14 text-left">
                                                <span className="text-sm text-gray-400 cursor-pointer">Forget Password</span>
                                            </div>
                                            <div className="my-4">
                                                <button
                                                    type="submit"
                                                    className="w-full text-white bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                                >
                                                    Login here
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
