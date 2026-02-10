import {
    useAuthStore
} from "../stores/auth.store";
import {
    useUiStore
} from "../stores/ui.store";

const BASE_URL =
    import.meta.env.API_URL || "https://jsonplaceholder.typicode.com";


async function request(url, options = {}) {
    const auth = useAuthStore();
    const ui = useUiStore();

    ui.setLoading(true);

    const headers = {
        "Content-Type": "application/json",
        ...(options.headers || {})
    }

    if (auth.token) {
        headers.Authorization = `Bearer ${auth.token}`;
    }

    try {
        const res = await fetch(BASE_URL + url, {
            ...options,
            headers
        });

        if (!res.ok) {
            const errorBody = res.json().catch(() => ({}));
            throw {
                status: res.status,
                message: errorBody.message || "Api Error!",
            }
        }

        return await res.json();
    } catch (error) {
        ui.toast(error.message || "Network Error", "error");
        throw error;
    } finally {
        ui.setLoading(false);
    }

}


export const httpClient = {
    get: (url) => request(url),
    post: (url, data) => request(url, {
        method: "POST",
        body: JSON.stringify(data),
    }),
    put: (url, data) => (url, data) => request(url, {
        method: "PUT",
        body: JSON.stringify(data),
    }),
    delete: (url) => (url) => request(url, {
        method: "DELETE",
    }),
}