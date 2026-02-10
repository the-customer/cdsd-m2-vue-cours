import {
    httpClient
} from "./htttpClient";

export const productService = {
    async list() {
        const data = await httpClient.get("/users");

        return data.map(u => dtoProduct(u));
    },

    async find(id) {
        const u = await httpClient.get(`/users/${id}`);
        return dtoProduct(u);
    }
}

function dtoProduct(user) {
    return {
        id: user.id,
        name: user.name,
        price: 500 + user.id * 300
    }
}