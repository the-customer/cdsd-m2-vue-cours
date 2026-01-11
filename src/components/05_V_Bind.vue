<template>
    <div>
        <!-- <input type="text" :value="'la valeur est :'+text"> -->
        <input type="text" :value="`la valeur est :${text}`">
        <button :disabled="isDisabled">cliquez-moi</button>
    </div>
</template>


<script setup>
import { ref } from "vue";

const text = ref('Un exemple');
const isDisabled = ref(true);
</script>