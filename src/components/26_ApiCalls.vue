<script setup>
import { url } from '@/config/api';
import { onMounted, ref } from 'vue';



const users = ref([]);
const loading = ref(false);
const error = ref(null);

async function fetchUsers() {
    loading.value = true;
    error.value = null;

    try {
        const res = await fetch(url.users.list);
        if (!res.ok) throw new Error('Erreur API!!!');

        users.value = await res.json();
    } catch (e) {
        error.value = e.message
    } finally {
        loading.value = false;
    }
}

onMounted(fetchUsers)

// onMounted(()=>{
//     fetchUsers()
// })

</script>

<template>
    <section class="card">
        <h2>26. API calls</h2>

        <p v-if="loading">Chargement...</p>

        <p v-if="error">{{ error }}</p>

        <ul v-if="!loading && !error">
            <li v-for="u in users" :key="u.id">
                {{ u.name }} - {{ u.email }}
            </li>
        </ul>
    </section>
</template>

<style scoped>
.card {
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 12px;
}

.error {
    color: red;
}
</style>