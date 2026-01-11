<script setup>
import { ref } from "vue";

    const attributeName = ref('title');
    const attributeValue = ref('Survolez-moi');
</script>

<template>
    <input :[attributeName]="attributeValue" type="text" />
</template>