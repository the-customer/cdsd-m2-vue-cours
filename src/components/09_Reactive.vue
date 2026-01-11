<script setup>
import { reactive } from "vue";

const user = reactive({
    nom: 'Breukh',
    age: 20,
    email:'breukh@example.com',
    ville: 'BreukhVille'
})
</script>

<template>
    <div class="div">
        <h3>{{user.nom}}</h3>
        <p>Age : {{user.age}}</p>
        <p>Email : {{user.email}}</p>
        <p>Ville : {{user.ville}}</p>
    </div>
</template>