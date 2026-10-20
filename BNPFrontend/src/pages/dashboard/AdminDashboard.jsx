import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

import Navbar from "../../component/Navbar";
import SummaryCard from "../../component/SummaryCard";
import TransactionTable from "../../component/TransactionTable";
import TransactionAnalytics from "../../component/TransactionAnalytics";

import {
    getAllTransactions,
    getTransactionCount,
    getTotalTransactionAmount,
    getHighValueTransactions,
} from "../../services/transactionService";

import { getAllCustomers } from "../../services/customerService";


function AdminDashboard() {

    const { user, logout } = useAuth();


    // =========================
    // Dashboard State
    // =========================

    const [customerCount, setCustomerCount] = useState(0);
    const [transactionCount, setTransactionCount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [highValueCount, setHighValueCount] = useState(0);

    const [transactions, setTransactions] = useState([]);


    // =========================
    // Filter State
    // =========================

    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("ALL");
    const [typeFilter, setTypeFilter] = useState("ALL");


    // =========================
    // UI State
    // =========================

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    // =========================
    // Load Dashboard Data
    // =========================

    useEffect(() => {

        const loadDashboardData = async () => {

            try {

                setLoading(true);
                setError("");


                const [
                    customers,
                    transactionData,
                    count,
                    total,
                    highValueTransactions,
                ] = await Promise.all([

                    getAllCustomers(),

                    getAllTransactions(),

                    getTransactionCount(),

                    getTotalTransactionAmount(),

                    getHighValueTransactions(20000),

                ]);


                setCustomerCount(customers.length);

                setTransactions(transactionData);

                setTransactionCount(count);

                setTotalAmount(total);

                setHighValueCount(
                    highValueTransactions.length
                );


            } catch (error) {

                console.error(
                    "Dashboard error:",
                    error
                );

                setError(
                    "Failed to load dashboard data."
                );


            } finally {

                setLoading(false);

            }

        };


        loadDashboardData();

    }, []);


    // =========================
    // Filter Transactions
    // =========================

    const filteredTransactions = transactions.filter(
        (transaction) => {

            const reference =
                transaction.transactionReference || "";


            const matchesSearch =
                reference
                    .toLowerCase()
                    .includes(
                        searchTerm.toLowerCase()
                    );


            const matchesStatus =
                statusFilter === "ALL" ||
                transaction.status === statusFilter;


            const matchesType =
                typeFilter === "ALL" ||
                transaction.transactionType === typeFilter;


            return (
                matchesSearch &&
                matchesStatus &&
                matchesType
            );

        }
    );


    // =========================
    // Render
    // =========================

    return (

        <div className="min-h-screen bg-gray-100">


            {/* =========================
                Navbar
            ========================== */}

            <Navbar
                user={user}
                onLogout={logout}
                role="ADMIN"
            />


            {/* =========================
                Main Content
            ========================== */}

            <main className="p-8">


                {/* =========================
                    Welcome Section
                ========================== */}

                <div className="mb-8">

                    <h2 className="text-3xl font-bold mb-2">

                        Welcome, {user?.name}

                    </h2>


                    <p className="text-gray-600">

                        You are logged in as ADMIN.

                    </p>

                </div>


                {/* =========================
                    Error Message
                ========================== */}

                {error && (

                    <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">

                        {error}

                    </div>

                )}


                {/* =========================
                    Summary Cards
                ========================== */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                    <SummaryCard
                        title="Total Customers"
                        value={
                            loading
                                ? "..."
                                : customerCount
                        }
                    />


                    <SummaryCard
                        title="Total Transactions"
                        value={
                            loading
                                ? "..."
                                : transactionCount
                        }
                    />


                    <SummaryCard
                        title="High Value Transactions"
                        value={
                            loading
                                ? "..."
                                : highValueCount
                        }
                    />


                </div>


                {/* =========================
                    Total Transaction Amount
                ========================== */}

                <div className="mt-6 bg-white p-6 rounded-xl shadow">


                    <h3 className="text-gray-500">

                        Total Transaction Amount

                    </h3>


                    <p className="text-4xl font-bold mt-2">

                        {loading

                            ? "..."

                            : `₹${Number(
                                totalAmount
                            ).toLocaleString("en-IN")}`

                        }

                    </p>


                </div>


                {/* =========================
                    Transaction Section
                ========================== */}

                <div className="mt-8 bg-white rounded-xl shadow overflow-hidden">


                    {/* =========================
                        Transaction Header
                    ========================== */}

                    <div className="p-6 border-b">


                        <h2 className="text-2xl font-bold">

                            Recent Transactions

                        </h2>


                        <p className="text-gray-500 mt-1">

                            All transactions available
                            to the administrator

                        </p>


                        {/* =========================
                            Filters
                        ========================== */}

                        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">


                            {/* Search */}

                            <input
                                type="text"
                                placeholder="Search by reference..."
                                value={searchTerm}
                                onChange={(e) =>
                                    setSearchTerm(
                                        e.target.value
                                    )
                                }
                                className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />


                            {/* Status */}

                            <select
                                value={statusFilter}
                                onChange={(e) =>
                                    setStatusFilter(
                                        e.target.value
                                    )
                                }
                                className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >

                                <option value="ALL">

                                    All Statuses

                                </option>


                                <option value="COMPLETED">

                                    Completed

                                </option>


                                <option value="FAILED">

                                    Failed

                                </option>

                            </select>


                            {/* Type */}

                            <select
                                value={typeFilter}
                                onChange={(e) =>
                                    setTypeFilter(
                                        e.target.value
                                    )
                                }
                                className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >

                                <option value="ALL">

                                    All Types

                                </option>


                                <option value="TRANSFER">

                                    Transfer

                                </option>


                                <option value="PAYMENT">

                                    Payment

                                </option>

                            </select>


                        </div>


                    </div>


                    {/* =========================
                        Transaction Table
                    ========================== */}

                    <TransactionTable
                        transactions={
                            filteredTransactions
                        }
                        loading={loading}
                    />


                </div>
                <TransactionAnalytics
                        transactions={transactions}
                />


            </main>


        </div>

    );

}


export default AdminDashboard;