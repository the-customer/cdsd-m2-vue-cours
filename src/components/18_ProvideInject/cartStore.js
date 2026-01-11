const {
    computed,
    reactive
} = require("vue");

export const CART_KEY = Symbol('CART');


export function createCartStore() {
    const state = reactive({
        items: [],
    })

    function add(product) {
        const found = state.items.find(p => p.id === product.id);
        if (found) found.qty++
        else state.items.push({
            ...product,
            qty: 1
        })
    }

    function remove(id) {
        state.items = state.items.filter(p => p.id !== id);
    }

    const total = computed(() => {
        return state.items.recuce((sum, p) => sum + p.price * p.qty, 0);
    })

    return {
        state,
        add,
        remove,
        total
    }
}