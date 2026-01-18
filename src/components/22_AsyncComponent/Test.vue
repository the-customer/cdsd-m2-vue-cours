<script setup>
import { defineAsyncComponent, ref } from 'vue';


const show = ref(false);

const HeavyComponent = defineAsyncComponent(() => import('./HeavyComponent.vue'))

</script>

<template>
    <section class="card">
        <h2>22. Async Component</h2>

        <button @click="show = true" class="btn">
            Charger le composant.
        </button>

        <Suspense>
            <template #default>
                <HeavyComponent v-if="show" />
            </template>

            <template #fallback>
                <p>Chargement...</p>
            </template>
        </Suspense>
        <p>Le code du composant n'est téléchargé qu'au moment de l'affichage</p>
    </section>
</template>

<style scoped>
.card {
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 12px;
}

.btn {
    padding: 8px 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.note {
    margin-top: 10px;
    color: #555;
}
</style>