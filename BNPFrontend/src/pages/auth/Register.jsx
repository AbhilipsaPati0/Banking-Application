import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerCustomer } from "../../services/registerService";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        accountType: "SAVINGS",
        initialDeposit: "",
        nomineeName: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");
        setSuccess("");
        setLoading(true);

        try {

            await registerCustomer({
                ...formData,
                initialDeposit:
                    formData.initialDeposit === ""
                        ? 0
                        : Number(formData.initialDeposit)
            });

            setSuccess(
                "Account created successfully! Redirecting to login..."
            );

            setTimeout(() => {
                navigate("/login");
            }, 2000);

        } catch (error) {

            setError(
                error.message || "Registration failed. Please try again."
            );

        } finally {

            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden">

                {/* Header */}

                <div className="bg-blue-900 text-white px-8 py-7">

                    <h1 className="text-3xl font-bold">
                        BNP Paribas
                    </h1>

                    <p className="text-blue-200 mt-1">
                        Open your account
                    </p>

                </div>


                {/* Form */}

                <div className="p-8">

                    <div className="mb-8">

                        <h2 className="text-2xl font-bold text-gray-800">
                            Customer Registration
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Create your secure banking account
                        </p>

                    </div>


                    {/* Error */}

                    {error && (
                        <div className="mb-6 p-4 rounded-lg bg-red-100 text-red-700">
                            {error}
                        </div>
                    )}


                    {/* Success */}

                    {success && (
                        <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-700">
                            {success}
                        </div>
                    )}


                    <form onSubmit={handleSubmit}>

                        {/* Personal Information */}

                        <div className="mb-8">

                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                Personal Information
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>


                                <div>
                                    <label className="block mb-2 font-medium">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>


                                <div>
                                    <label className="block mb-2 font-medium">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Create a password"
                                        required
                                        minLength="6"
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>


                                <div>
                                    <label className="block mb-2 font-medium">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter phone number"
                                        required
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                            </div>


                            <div className="mt-5">

                                <label className="block mb-2 font-medium">
                                    Address
                                </label>

                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter your address"
                                    required
                                    rows="3"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />

                            </div>

                        </div>


                        {/* Account Information */}

                        <div className="mb-8">

                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                Bank Account
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                <div>

                                    <label className="block mb-2 font-medium">
                                        Account Type
                                    </label>

                                    <select
                                        name="accountType"
                                        value={formData.accountType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >

                                        <option value="SAVINGS">
                                            Savings Account
                                        </option>

                                        <option value="CURRENT">
                                            Current Account
                                        </option>

                                    </select>

                                </div>


                                <div>

                                    <label className="block mb-2 font-medium">
                                        Initial Deposit
                                    </label>

                                    <input
                                        type="number"
                                        name="initialDeposit"
                                        value={formData.initialDeposit}
                                        onChange={handleChange}
                                        placeholder="Enter initial deposit"
                                        min="0"
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />

                                </div>


                                <div className="md:col-span-2">

                                    <label className="block mb-2 font-medium">
                                        Nominee Name
                                    </label>

                                    <input
                                        type="text"
                                        name="nomineeName"
                                        value={formData.nomineeName}
                                        onChange={handleChange}
                                        placeholder="Enter nominee name"
                                        required
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />

                                </div>

                            </div>

                        </div>


                        {/* Submit */}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition disabled:opacity-50"
                        >

                            {loading
                                ? "Creating Account..."
                                : "Create Bank Account"}

                        </button>

                    </form>


                    {/* Login link */}

                    <div className="text-center mt-6">

                        <span className="text-gray-500">
                            Already have an account?
                        </span>

                        <button
                            onClick={() => navigate("/login")}
                            className="ml-2 text-blue-700 font-semibold hover:underline"
                        >
                            Login
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Register;