import {
    defineStore
} from "pinia";

const STORAGE_KEY = 'auth_version1';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null,
        user: null, // {id, fullName,role}
    }),
    getters: {
        isAuthenticated(state) {
            // return !state.token === null
            return !!state.token;
        },
        role(state) {
            // return state.user ?.role ?? "GUEST"
            return state.user ? state.user.role : "GUEST"
        }
    },
    actions: {
        loginAs(role = "CASHIER") {
            this.token = "this-is-a-fake-token";
            this.user = {
                id: 1,
                fullName: "Demo User",
                role: role
            };
            this.persist()
        },

        logout() {
            this.token = null;
            this.user = null;
            this.persist();
        },

        persist() {
            try {
                localStorage.setItem(
                    STORAGE_KEY,
                    JSON.stringify({
                        token: this.token,
                        user: this.user
                    })
                )
            } catch (error) {
                console.warn("Auth persist failled!!!", error);
            }
        },

        hydrate() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                if (!raw) return;
                const parsed = JSON.parse(raw);
                this.token = parsed ? parsed.token : null;
                this.user = parsed ? parsed.user : null;
            } catch (error) {
                console.log("Auth hydrate failled", e)
            }
        }
    }
})