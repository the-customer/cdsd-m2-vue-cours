<script setup>
import { ref, watch } from 'vue';

const query = ref('');
const status = ref('En attente...')



watch(query, (newValue, oldValue) => {
    if (newValue.trim() === oldValue.trim()) return;
    status.value = "Rechercher en cours..."
    // simuler l'appel d'un API
    setTimeout(() => {
        if (newValue.trim() === '') {
            status.value = 'En attente...'
        } else {
            status.value = `Resultats pour ${newValue}`
        }
    }, 500)
});
</script>

<template>
    <div class="card">
        <h2>20. Watchers</h2>
        <input v-model="query" placeholder="Rechercher un client..." type="text">

        <p class="result">{{ status }}</p>

        <p class="note">
            <code>watcher</code> est utilisé pour declencher des effets (API, logs, autosave,...)
        </p>
    </div>
</template>

<style scoped>
.card {
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 12px;
}

.note {
    margin-top: 10px;
    color: #555;
}

.result {
    margin-top: 10px;
    font-weight: 600;
}

input {
    padding: 9px;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 100%;
    max-width: 320px;
}
</style>