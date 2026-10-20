import React from "react";
import { useAuth } from "../../context/AuthContext";

function CustomerDashboard() {

    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen bg-gray-100">

            <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold">
                        BNP Paribas
                    </h1>
                    <p className="text-sm text-blue-200">
                        Customer Dashboard
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <span>{user?.name}</span>

                    <button
                        onClick={logout}
                        className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold"
                    >
                        Logout
                    </button>
                </div>
            </nav>

            <main className="p-8">

                <h2 className="text-3xl font-bold mb-2">
                    Welcome, {user?.name}
                </h2>

                <p className="text-gray-600 mb-8">
                    You are logged in as CUSTOMER.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-gray-500">
                            Account Balance
                        </h3>
                        <p className="text-3xl font-bold mt-2">
                            —
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-gray-500">
                            Recent Transactions
                        </h3>
                        <p className="text-3xl font-bold mt-2">
                            —
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-gray-500">
                            Account Status
                        </h3>
                        <p className="text-3xl font-bold mt-2">
                            Active
                        </p>
                    </div>

                </div>

            </main>
        </div>
    );
}

export default CustomerDashboard;