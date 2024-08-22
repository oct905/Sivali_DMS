"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FormSignUpUser() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);
    const router = useRouter();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        openModal();
    };

    const handleContinue = () => {
        if (isTermsAccepted) {
            router.push("/");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up Jobseeker</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            className="w-full mt-2 p-2 border rounded-lg"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full mt-2 p-2 border rounded-lg"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            id="phone"
                            className="w-full mt-2 p-2 border rounded-lg"
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full mt-2 p-2 border rounded-lg"
                            placeholder="Min 6 characters"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="rePassword" className="block text-gray-700">Re-Password</label>
                        <input
                            type="password"
                            id="rePassword"
                            className="w-full mt-2 p-2 border rounded-lg"
                            placeholder="Re-Password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
                    >
                        SIGN UP
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
                        SIGN UP WITH GOOGLE
                    </button>
                </form>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                            <h2 className="text-xl font-bold mb-4">Terms and Conditions</h2>
                            <div className="h-64 overflow-y-scroll mb-4">
                                <p className="text-gray-700">
                                    Selamat datang di platform AVISHA ...
                                    {/* Include the terms and conditions text here */}
                                </p>
                            </div>
                            <div className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    id="acceptTerms"
                                    checked={isTermsAccepted}
                                    onChange={(e) => setIsTermsAccepted(e.target.checked)}
                                    className="mr-2"
                                />
                                <label htmlFor="acceptTerms" className="text-gray-700">I accept the Terms and Conditions</label>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className={`bg-gray-600 text-white py-2 px-4 rounded-lg transition duration-300 mr-2 ${!isTermsAccepted ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
                                    onClick={handleContinue}
                                    disabled={!isTermsAccepted}
                                >
                                    Continue
                                </button>
                                <button
                                    className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition duration-300"
                                    onClick={closeModal}
                                >
                                    Decline
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
