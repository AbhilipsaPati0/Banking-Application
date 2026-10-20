const API_URL = "http://localhost:8080/api/fraud";

export const analyzeTransaction = async (transactionId) => {
    const response = await fetch(
        `${API_URL}/analyze/${transactionId}`
    );

    if (!response.ok) {
        throw new Error("Failed to analyze transaction");
    }

    return await response.json();
};