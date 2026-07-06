import axios from "axios";

const http = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
    },
});

http.interceptors.response.use((response) => {
    if (
        response.data &&
        typeof response.data === "object" &&
        "body" in response.data
    ) {
        response.data = response.data.body;
    }

    return response;
});

export default http;
