"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FormSignUpClient() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        openModal();
    };

    const handleContinue = () => {
        // Here you can implement any additional logic before redirecting, if needed.
        router.push("/");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up for Company</h2>
                <form onSubmit={handleFormSubmit}>
                    {/* Form Fields */}
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
                        <label htmlFor="companyName" className="block text-gray-700">Name Company</label>
                        <input
                            type="text"
                            id="companyName"
                            className="w-full mt-2 p-2 border rounded-lg"
                            placeholder="Name Company"
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
                        <label htmlFor="industry" className="block text-gray-700">Industry</label>
                        <select
                            id="industry"
                            className="w-full mt-2 p-2 border rounded-lg"
                        >
                            <option value="Konsultasi (IT, Ilmu Pengetahuan, dll)">Konsultasi (IT, Ilmu Pengetahuan, dll)</option>
                            <option value="Other Industry">Other Industry</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="position" className="block text-gray-700">Position</label>
                        <input
                            type="text"
                            id="position"
                            className="w-full mt-2 p-2 border rounded-lg"
                            placeholder="Position"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="companySize" className="block text-gray-700">Company Size</label>
                        <select
                            id="companySize"
                            className="w-full mt-2 p-2 border rounded-lg"
                        >
                            <option value="1-50 Pegawai">1-50 Pegawai</option>
                            <option value="51-100 Pegawai">51-100 Pegawai</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="companyPhone" className="block text-gray-700">Phone Company</label>
                        <input
                            type="text"
                            id="companyPhone"
                            className="w-full mt-2 p-2 border rounded-lg"
                            placeholder="Phone Company"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full mt-2 p-2 border rounded-lg"
                            placeholder="Password"
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
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        SIGN UP
                    </button>
                </form>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                            <h2 className="text-xl font-bold mb-4">Terms and Conditions</h2>
                            <div className="h-64 overflow-y-scroll mb-4">
                                <p className="text-gray-700">
                                    {/* Add the terms and conditions text here */}
                                    Selamat datang di platform AVISHA ...
                                </p>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 mr-2"
                                    onClick={handleContinue}
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
