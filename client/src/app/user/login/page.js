import React from 'react';

export default function FormLoginUser() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In Jobseeker</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full mt-2 p-2 border rounded-lg"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full mt-2 p-2 border rounded-lg"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
                    >
                        SIGN IN
                    </button>
                    <div className="flex items-center my-4">
                        <hr className="w-full border-gray-300" />
                        <span className="mx-2 text-gray-400">or</span>
                        <hr className="w-full border-gray-300" />
                    </div>
                    <button
                        type="button"
                        className="w-full bg-white text-gray-600 border border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition duration-300"
                    >
                        <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
                        SIGN IN WITH GOOGLE
                    </button>
                </form>
                <div className="mt-4 text-center text-sm text-gray-500">
                    <p>
                        By signing in to your account, you agree to our <a href="#" className="text-blue-600">terms of service</a> and <a href="#" className="text-blue-600">privacy policy</a>.
                    </p>
                    <p className="mt-4">
                        Not a member? <a href="#" className="text-blue-600">Create an account</a>
                    </p>
                    <p className="mt-2">
                        <a href="#" className="text-blue-600">Forgot Password?</a>
                    </p>
                </div>
            </div>
        </div>
    );
}