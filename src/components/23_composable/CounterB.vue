<script setup>
import { useCounter } from './useCounter';

const { count, decrement } = useCounter(10);
</script>
<template>
    <div class="box">
        <h4>Compteur B</h4>
        <p>{{ count }}</p>

        <button @click="decrement">-</button>
    </div>
</template>
