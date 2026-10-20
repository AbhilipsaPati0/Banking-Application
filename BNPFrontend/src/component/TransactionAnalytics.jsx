import React from "react";

function TransactionAnalytics({ transactions }) {

    // =========================
    // Transaction Status
    // =========================

    const completedCount = transactions.filter(
        (transaction) =>
            transaction.status === "COMPLETED"
    ).length;

    const failedCount = transactions.filter(
        (transaction) =>
            transaction.status === "FAILED"
    ).length;


    // =========================
    // Transaction Amount
    // =========================

    const validTransactions = transactions.filter(
        (transaction) =>
            transaction.amount != null
    );

    const totalAmount = validTransactions.reduce(
        (total, transaction) =>
            total + Number(transaction.amount),
        0
    );

    const averageAmount =
        validTransactions.length > 0
            ? totalAmount / validTransactions.length
            : 0;


    // =========================
    // Transaction Types
    // =========================

    const transferTransactions = transactions.filter(
        (transaction) =>
            transaction.transactionType === "TRANSFER"
    );

    const paymentTransactions = transactions.filter(
        (transaction) =>
            transaction.transactionType === "PAYMENT"
    );


    const transferAmount = transferTransactions.reduce(
        (total, transaction) =>
            total + Number(transaction.amount || 0),
        0
    );

    const paymentAmount = paymentTransactions.reduce(
        (total, transaction) =>
            total + Number(transaction.amount || 0),
        0
    );


    return (

        <div className="mt-8">

            {/* =========================
                Analytics Heading
            ========================== */}

            <div className="mb-5">

                <h2 className="text-2xl font-bold">
                    Transaction Analytics
                </h2>

                <p className="text-gray-500 mt-1">
                    Overview of transaction activity
                </p>

            </div>


            {/* =========================
                Analytics Cards
            ========================== */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">


                {/* Completed */}

                <div className="bg-white p-6 rounded-xl shadow">

                    <p className="text-gray-500">
                        Completed
                    </p>

                    <p className="text-3xl font-bold mt-2">
                        {completedCount}
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                        Successful transactions
                    </p>

                </div>


                {/* Failed */}

                <div className="bg-white p-6 rounded-xl shadow">

                    <p className="text-gray-500">
                        Failed
                    </p>

                    <p className="text-3xl font-bold mt-2">
                        {failedCount}
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                        Failed transactions
                    </p>

                </div>


                {/* Average */}

                <div className="bg-white p-6 rounded-xl shadow">

                    <p className="text-gray-500">
                        Average Transaction
                    </p>

                    <p className="text-3xl font-bold mt-2">
                        ₹{averageAmount.toLocaleString("en-IN", {
                            maximumFractionDigits: 0
                        })}
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                        Average transaction value
                    </p>

                </div>


                {/* Total */}

                <div className="bg-white p-6 rounded-xl shadow">

                    <p className="text-gray-500">
                        Analysed Amount
                    </p>

                    <p className="text-3xl font-bold mt-2">
                        ₹{totalAmount.toLocaleString("en-IN")}
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                        Across available transactions
                    </p>

                </div>

            </div>


            {/* =========================
                Transaction Type Analysis
            ========================== */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">


                {/* Transfer */}

                <div className="bg-white p-6 rounded-xl shadow">

                    <div className="flex justify-between items-center">

                        <div>

                            <h3 className="text-lg font-semibold">
                                Transfer Transactions
                            </h3>

                            <p className="text-gray-500 text-sm mt-1">
                                {transferTransactions.length} transactions
                            </p>

                        </div>

                        <p className="text-2xl font-bold">
                            ₹{transferAmount.toLocaleString("en-IN")}
                        </p>

                    </div>


                    <div className="mt-5 h-3 bg-gray-200 rounded-full overflow-hidden">

                        <div
                            className="h-full bg-blue-700 rounded-full"
                            style={{
                                width: totalAmount > 0
                                    ? `${(transferAmount / totalAmount) * 100}%`
                                    : "0%"
                            }}
                        />

                    </div>

                </div>


                {/* Payment */}

                <div className="bg-white p-6 rounded-xl shadow">

                    <div className="flex justify-between items-center">

                        <div>

                            <h3 className="text-lg font-semibold">
                                Payment Transactions
                            </h3>

                            <p className="text-gray-500 text-sm mt-1">
                                {paymentTransactions.length} transactions
                            </p>

                        </div>

                        <p className="text-2xl font-bold">
                            ₹{paymentAmount.toLocaleString("en-IN")}
                        </p>

                    </div>


                    <div className="mt-5 h-3 bg-gray-200 rounded-full overflow-hidden">

                        <div
                            className="h-full bg-green-600 rounded-full"
                            style={{
                                width: totalAmount > 0
                                    ? `${(paymentAmount / totalAmount) * 100}%`
                                    : "0%"
                            }}
                        />

                    </div>

                </div>


            </div>

        </div>

    );
}

export default TransactionAnalytics;