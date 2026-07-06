import axios from "axios";

const api = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.response.use((response) => {
    if (
        response.data &&
        typeof response.data === "object" &&
        "body" in response.data
    ) {
        response.data = response.data.body;
    }

    return response;
});

export default api;
