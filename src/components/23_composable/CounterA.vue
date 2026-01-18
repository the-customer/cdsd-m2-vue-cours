<script setup>
import { useCounter } from './useCounter';

const { count, increment } = useCounter();
</script>
<template>
    <div class="box">
        <h4>Compteur A</h4>
        <p>{{ count }}</p>

        <button @click="increment">+</button>
    </div>
</template>
