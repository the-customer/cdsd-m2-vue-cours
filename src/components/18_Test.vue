<script setup>
import { provide } from 'vue';
import { CART_KEY, createCartStore } from './18_ProvideInject/cartStore';
import ProductList from './18_ProvideInject/ProductInject.vue';
import CartPanel from './18_ProvideInject/CartPanelInject.vue';


const cartStore = createCartStore();
provide(CART_KEY, cartStore);

</script>

<template>
    <section>
        <h2>18. Provider & Inject</h2>
        <p>Pouvoir creer un composant parent qui partage des donnees directement a tous ses composant enfants</p>

        <div class="layout">
            <ProductList />
            <CartPanel />
        </div>

    </section>
</template>

<style scoped>
.layout {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 12px;
    margin-top: 12px;
    align-items: start;
}
</style>