<script setup>
import { ref } from "vue";

    const isActive = ref(false);
    const toggle = ()=>{
        isActive.value = !isActive.value;
    }
</script>

<template>
    <div>
        <button @click="toggle">{{isActive ? 'Actif' : 'Inactif'}}</button>
    </div>
</template>
<style scoped>
    button{
        background-color: rgb(10, 134, 176);
        color: white;
        border-radius: 1rem;
        padding: 15px 0;
        width: 200px;
        border: none;
        cursor: pointer;
    }
</style>