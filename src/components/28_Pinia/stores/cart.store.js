import {
    defineStore
} from "pinia"

const STORAGE_KEY = "cart_key_version_1"

export const useCartStore = defineStore("cart", {
    state: () => ({
        items: [], // {id,name,price,qty}
    }),

    getters: {
        countItems(state) {
            return state.items.reduce((sum, i) => sum + i.qty, 0);
        },
        subTotal(state) {
            return state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
        }
    },

    actions: {
        add(product) {
            const found = this.items.find(p => p.id === product.id);
            if (found) found.qty++
            else this.items.push({
                ...product,
                qty: 1
            })
            this.persist();
        },

        inc(id) {
            const found = this.items.find(p => p.id === id);
            if (!found) return;
            found.qty += 1;
            this.persist();
        },
        dec(id) {
            const found = this.items.find(p => p.id === id);
            if (!found) return;

            found.qty -= 1;
            if (found.qty <= 0) this.remove(id);
            this.persist();
        },

        remove(id) {
            this.items = this.items.filter(i => i.id !== id);
            this.persist();
        },

        clear() {
            this.items = [];
            this.persist();
        },

        persist() {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
            } catch (error) {
                console.warn("Cart persist failled!!!", error)
            }
        },

        hydrate() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                if (!raw) return;
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) this.items = parsed;
            } catch (error) {
                console.warn("Cart hydrate failled !!!", e)
            }
        }
    }

})