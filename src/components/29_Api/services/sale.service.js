import {
    httpClient
} from "./htttpClient"

export const saleService = {
    async list() {
        return httpClient.get("/posts")
    },

    async create(payload) {
        return httpClient.post("/posts", payload);
    }
}