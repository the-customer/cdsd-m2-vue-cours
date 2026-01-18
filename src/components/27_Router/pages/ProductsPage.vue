<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const products = [
    { id: 1, name: "Stylo", price: 100 },
    { id: 2, name: "Cahier", price: 500 },
    { id: 3, name: "Classeur", price: 750 },
];

function goToDetails(id) {
    router.push({ name: "product.details", params: { id } })
}
</script>

<template>
    <div>
        <h2>Produits</h2>

        <ul>
            <li v-for="p in products" :key="p.id">à
                <strong>{{ p.name }}</strong> - {{ p.price }} FCFA
                <button @click="goToDetails(p.id)">Détails</button>
            </li>
        </ul>
    </div>
</template>
