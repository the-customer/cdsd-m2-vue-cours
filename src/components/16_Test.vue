<script setup>
import ProductCard from './16_ComponentEvent.vue'
import CartPreview from './16_Cart.vue'
import { ref } from 'vue';

const products = [
    { id:1, name: 'Stylo', price:100 },
    { id:2, name: 'Cahier', price:500 },
    { id:3, name: 'Gomme', price:75 },
    { id:4, name: 'Classeur', price:1000 },
];

const cart = ref([]);

function onAddToCart(prod){
    cart.value.push(prod);
    
}
</script>

<template>
   <section>
    <h2>16. Component Event</h2>
    <p>bla bla bla..</p>

    <div class="layout">
        <div class="col">
            <ProductCard 
            v-for="p in products" 
            :key="p.id"
            :product="p"
            @add-to-cart="onAddToCart"
            />
        </div>
        
        <CartPreview :items="cart"/>
    </div>
   </section>
</template>

<style scoped>
    .layout{
        display: grid;
        gap: 12px;
        grid-template-columns: 2fr 1fr;
        margin-top: 12px;
        align-items: start;
    }
    .col{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>