const API_URL = "http://localhost:8080/api";

const getAuthHeaders = () => {
    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
        throw new Error("User is not logged in");
    }

    const user = JSON.parse(savedUser);

    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user.token}`,
    };
};

export const getAllTransactions = async () => {
    const response = await fetch(`${API_URL}/transactions`, {
        method: "GET",
        headers: getAuthHeaders(),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch transactions");
    }

    return await response.json();
};

export const getTransactionCount = async () => {
    const response = await fetch(`${API_URL}/transactions/count`, {
        method: "GET",
        headers: getAuthHeaders(),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch transaction count");
    }

    return await response.json();
};

export const getTotalTransactionAmount = async () => {
    const response = await fetch(`${API_URL}/transactions/total`, {
        method: "GET",
        headers: getAuthHeaders(),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch total transaction amount");
    }

    return await response.json();
};

export const getHighValueTransactions = async (amount) => {
    const response = await fetch(
        `${API_URL}/transactions/high-value?amount=${amount}`,
        {
            method: "GET",
            headers: getAuthHeaders(),
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch high-value transactions");
    }

    return await response.json();
};