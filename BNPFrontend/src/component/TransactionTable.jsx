import React, { useState } from "react";
import { analyzeTransaction } from "../services/fraudService";

function TransactionTable({ transactions, loading }) {

    const [analysis, setAnalysis] = useState(null);
    const [analyzingId, setAnalyzingId] = useState(null);

    const handleAnalyze = async (transactionId) => {
        try {
            setAnalyzingId(transactionId);

            const result = await analyzeTransaction(transactionId);

            setAnalysis({
                ...result,
                transactionId
            });

        } catch (error) {
            console.error("Fraud analysis failed:", error);
            alert("Failed to analyze transaction.");
        } finally {
            setAnalyzingId(null);
        }
    };

    if (loading) {
        return (
            <div className="p-8 text-center text-gray-500">
                Loading transactions...
            </div>
        );
    }

    if (transactions.length === 0) {
        return (
            <div className="p-8 text-center text-gray-500">
                No transactions match your filters.
            </div>
        );
    }

    return (
        <div>

            {/* ================= TRANSACTION TABLE ================= */}

            <div className="overflow-x-auto">

                <table className="w-full text-left">

                    <thead className="bg-gray-50 border-b">
                        <tr>

                            <th className="px-6 py-4 font-semibold text-gray-600">
                                ID
                            </th>

                            <th className="px-6 py-4 font-semibold text-gray-600">
                                Reference
                            </th>

                            <th className="px-6 py-4 font-semibold text-gray-600">
                                Amount
                            </th>

                            <th className="px-6 py-4 font-semibold text-gray-600">
                                Type
                            </th>

                            <th className="px-6 py-4 font-semibold text-gray-600">
                                Status
                            </th>

                            <th className="px-6 py-4 font-semibold text-gray-600">
                                Date
                            </th>

                            <th className="px-6 py-4 font-semibold text-gray-600">
                                AI Risk
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        {transactions.map((transaction) => (

                            <tr
                                key={transaction.id}
                                className="border-b hover:bg-gray-50"
                            >

                                {/* ID */}
                                <td className="px-6 py-4">
                                    {transaction.id}
                                </td>


                                {/* Reference */}
                                <td className="px-6 py-4 font-medium">
                                    {transaction.transactionReference || "—"}
                                </td>


                                {/* Amount */}
                                <td className="px-6 py-4">
                                    {transaction.amount != null
                                        ? `₹${Number(
                                            transaction.amount
                                        ).toLocaleString("en-IN")}`
                                        : "—"}
                                </td>


                                {/* Type */}
                                <td className="px-6 py-4">
                                    {transaction.transactionType || "—"}
                                </td>


                                {/* Status */}
                                <td className="px-6 py-4">
                                    {transaction.status || "—"}
                                </td>


                                {/* Date */}
                                <td className="px-6 py-4">
                                    {transaction.transactionDate || "—"}
                                </td>


                                {/* AI Risk Button */}
                                <td className="px-6 py-4">

                                    <button
                                        onClick={() =>
                                            handleAnalyze(transaction.id)
                                        }
                                        disabled={
                                            analyzingId === transaction.id
                                        }
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
                                    >

                                        {analyzingId === transaction.id
                                            ? "Analyzing..."
                                            : "Analyze Risk"}

                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>


            {/* ================= AI ANALYSIS RESULT ================= */}

            {analysis && (

                <div className="mt-6 p-6 rounded-xl border bg-white shadow-sm">

                    <h2 className="text-xl font-bold mb-5">
                        🤖 AI Fraud Analysis
                    </h2>


                    {/* Summary Cards */}

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">


                        {/* Prediction */}

                        <div className="p-4 rounded-lg bg-gray-50">

                            <p className="text-sm text-gray-500">
                                Prediction
                            </p>

                            <p
                                className={`text-lg font-bold ${
                                    analysis.prediction === "FRAUD"
                                        ? "text-red-600"
                                        : "text-green-600"
                                }`}
                            >
                                {analysis.prediction}
                            </p>

                        </div>


                        {/* Fraud Probability */}

                        <div className="p-4 rounded-lg bg-gray-50">

                            <p className="text-sm text-gray-500">
                                Fraud Probability
                            </p>

                            <p className="text-lg font-bold">
                                {analysis.fraud_percentage}%
                            </p>

                        </div>


                        {/* Risk Level */}

                        <div className="p-4 rounded-lg bg-gray-50">

                            <p className="text-sm text-gray-500">
                                Risk Level
                            </p>

                            <p
                                className={`text-lg font-bold ${
                                    analysis.risk_level === "HIGH"
                                        ? "text-red-600"
                                        : analysis.risk_level === "MEDIUM"
                                            ? "text-yellow-600"
                                            : "text-green-600"
                                }`}
                            >
                                {analysis.risk_level}
                            </p>

                        </div>


                        {/* Transaction ID */}

                        <div className="p-4 rounded-lg bg-gray-50">

                            <p className="text-sm text-gray-500">
                                Transaction
                            </p>

                            <p className="text-lg font-bold">
                                #{analysis.transactionId}
                            </p>

                        </div>

                    </div>


                    {/* ================= RISK REASONS ================= */}

                    {analysis.risk_reasons &&
                        analysis.risk_reasons.length > 0 && (

                            <div className="mt-6">

                                <p className="font-semibold mb-3">
                                    Why was this transaction flagged?
                                </p>

                                <div className="space-y-2">

                                    {analysis.risk_reasons.map(
                                        (reason, index) => (

                                            <div
                                                key={index}
                                                className="flex items-center gap-2 p-3 bg-red-50 rounded-lg text-gray-700"
                                            >

                                                <span className="text-red-600">
                                                    ⚠️
                                                </span>

                                                <span>
                                                    {reason}
                                                </span>

                                            </div>

                                        )
                                    )}

                                </div>

                            </div>

                        )}


                    {/* ================= LOW RISK MESSAGE ================= */}

                    {analysis.risk_level === "LOW" && (

                        <div className="mt-5 p-4 bg-green-50 rounded-lg text-green-700">

                            ✅ This transaction appears to have a low fraud
                            risk.

                        </div>

                    )}

                </div>

            )}

        </div>
    );
}

export default TransactionTable;