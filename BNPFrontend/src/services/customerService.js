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

export const getAllCustomers = async () => {
    const response = await fetch(`${API_URL}/customers`, {
        method: "GET",
        headers: getAuthHeaders(),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch customers");
    }

    return await response.json();
};