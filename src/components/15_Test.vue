<script setup>
import ProductCard from './15_Props.vue'

const products = [
    { id:1, name: 'Stylo', price:0 },
    { id:2, name: 'Cahier', price:500 },
    { id:3, name: 'Gomme', price:75 },
    { id:4, name: 'Classeur', price:1000 },
];
</script>

<template>
   <section>
    <h2>15. Props</h2>
    <p>bla bla bla..</p>

    <div class="grid">
         <ProductCard 
            v-for="p in products" 
            :key="p.id"
            :product="p"
            />
    </div>
   </section>
</template>

<style scoped>
    .grid{
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(3,minmax(0,1fr));
        margin-top: 12px;
    }
</style>