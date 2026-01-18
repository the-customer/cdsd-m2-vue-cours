<script setup>
import { inject } from 'vue';
import { CART_KEY } from './cartStore';



const cart = inject(CART_KEY)
if (!cart) throw new Error("Cart store not provided!!!");


inject
const products = [
    { id: 1, name: 'Stylo', price: 100 },
    { id: 2, name: 'Cahier', price: 500 },
    { id: 3, name: 'Gomme', price: 75 },
];

</script>

<template>
    <div class="col">
        <h3>Produits</h3>
        <div class="list">
            <button v-for="p in products" :key="p.id" class="item" @click="cart.add(p)">
                <span>{{ p.name }}</span>
                <strong>{{ p.price.toLocaleString() }} FCA</strong>
            </button>
        </div>
    </div>
</template>

<style scoped>
.col {
    padding: 14px;
    border: 1px solid #eee;
    border-radius: 12px;
}

.list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
}

.item {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 10px;
    background: white;
    cursor: pointer;
}
</style>