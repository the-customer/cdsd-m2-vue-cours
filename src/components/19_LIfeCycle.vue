<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const seconds = ref(0);
let intervalId = null;

onMounted(() => {
    console.log("Component mounted");
    intervalId = setInterval(() => {
        seconds.value++;
    }, 1000)
});

onUnmounted(() => {
    console.log("Component unmounted")
    clearInterval(intervalId)
})



</script>


<template>
    <section class="card">
        <h2>19. Lifecycle Hooks</h2>
        <p>Temps passé dans ce fichier : </p>
        <h3>{{ seconds }} secondes</h3>


        <p class="note">
            <code>onMounted</code> = initialisation <br>
            <code>onUnmounted</code> = nettoyage (a faire pour eviter les fuites de memoires)
        </p>
    </section>
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
</style>