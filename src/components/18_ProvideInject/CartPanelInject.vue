<script setup>
import { inject } from 'vue';
import { CART_KEY } from './cartStore';

const cart = inject(CART_KEY);
if (!cart) throw new Error("Cart store not provided!!!")

console.log(cart.total.value)
</script>


<template>
    <div class="col">
        <h3>Panier</h3>
        <p v-if="cart.state.items.length === 0" class="empty">Panier est vide</p>

        <ul v-else class="list">
            <li v-for="i in cart.state.items" :key="i.id">
                <div>
                    <strong>{{ i.name }}</strong>
                    <span class="muted">x {{ i.qty }}</span>
                </div>
                <div class="right">
                    {{ (i.price * i.qty).toLocaleString() }} FCFA
                </div>
            </li>
        </ul>

        <div class="total">
            <span>Total</span>
            <strong>{{ cart.total }} FCA</strong>
        </div>
    </div>
</template>


<style scoped>
.col {
    padding: 14px;
    border: 1px solid #eee;
    border-radius: 12px;
    background: #fafafa;
}

.empty {
    color: #666;
    margin-top: 10px;
}

.list {
    margin: 10px 0 0;
    padding-left: 18px;
}

.list li {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 8px;
}

.muted {
    color: #666;
    margin-left: 6px;
}

.total {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #eee;
    padding-top: 10px;
    margin-top: 10px;
}

.right {
    white-space: nowrap;
}
</style>