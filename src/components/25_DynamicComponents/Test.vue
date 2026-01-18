<script setup>
import { computed, ref } from 'vue';
import TabClient from './TabClient.vue';
import TabProduct from './TabProduct.vue';

const currentTab = ref('products');

const currentComponent = computed(() =>
    currentTab.value === 'products' ? TabProduct : TabClient
)
</script>

<template>
    <section class="cart">
        <h2>25. Dynamic Components</h2>

        <div class="tabs">
            <button @click="currentTab = 'products'">Produits</button>
            <button @click="currentTab = 'clients'">Client</button>
        </div>


        <!-- <TabClient v-if="currentTab == 'clients'" />
        <TabProduct v-else /> -->

        <component :is="currentComponent" />
    </section>
</template>


<style scoped>
.card {
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 12px;
}

.tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
}

button {
    padding: 8px 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.box {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 10px;
}
</style>