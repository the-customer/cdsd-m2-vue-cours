export const authService = {
    async login(credentials) {
        if (credentials.email && credentials.password) {
            // appel d'API ici...
            return {
                token: "this-is-my-fake-token",
                user: {
                    id: 1,
                    fullName: "Celui qui c connecté",
                    role: "CAISSIER"
                }
            }
        }
        throw new Error("Invalid credentials!")
    }
}