<script setup>
import { ref } from "vue";

const message = ref('Hello vue.js!');
</script>

<template>
    <div>
        <h1>{{message}}</h1>
    </div>
</template>