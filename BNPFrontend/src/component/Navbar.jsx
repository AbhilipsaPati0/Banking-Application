import React from "react";

function Navbar({ user, onLogout, role }) {
    return (
        <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">

            {/* Brand */}
            <div>
                <h1 className="text-xl font-bold">
                    BNP Paribas
                </h1>

                <p className="text-sm text-blue-200">
                    {role} Dashboard
                </p>
            </div>

            {/* User Section */}
            <div className="flex items-center gap-4">

                <span className="font-medium">
                    {user?.name}
                </span>

                <button
                    onClick={onLogout}
                    className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;