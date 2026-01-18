<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = route.params.id;


</script>

<template>
    <div>
        <h2>Détails produit</h2>
        <p>ID : <strong>{{ productId }}</strong></p>

        <router-link to="/products">Retour aux produits</router-link>
    </div>
</template>
