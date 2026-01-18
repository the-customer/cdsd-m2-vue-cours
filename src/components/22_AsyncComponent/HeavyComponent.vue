<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    console.log("Heavy component loaded!")
})
</script>

<template>
    <div class="box">
        <h3>Composant lourd chargé</h3>
        <p>
            Ce composant n'est chargé que lorsqu'on en a besoin.
        </p>
    </div>
</template>

<style>
box {
    padding: 20px;
    border: 1px dashed #aaa;
    border-radius: 12px;
    background: #fafafa;
}
</style>