<script setup>
import { computed, ref } from "vue";

    const prenom = ref("Breukh");
    const nom = ref("Ndiaye");
    const nomComplet = computed(()=>{
        return `${prenom.value} ${nom.value}`;
    })
</script>
<template>
    <div>
        <h3>{{nomComplet}}</h3>
        <form>
            <input type="text" :value="prenom">
            <input type="text" :value="nom">
        </form>
    </div>
</template>

<style scoped>
    input{
        display: block;
        padding: 5px;
        font-size: 18px;
        margin-block: 1rem;
        color: #333;
        opacity: 0.5;
    }
</style>