<script setup>
import CounterA from './CounterA.vue';
import CounterB from './CounterB.vue';


</script>
<template>
    <section class="card">
        <h2>23. Composable</h2>
        <p>Une logique réutilisable dans plusieurs composants.</p>

        <div class="row">
            <CounterA />
            <CounterB />
        </div>
    </section>
</template>

<style scoped>
.card {
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 12px;
}

.row {
    display: flex;
    gap: 12px;
}

.box {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 160px;
}

button {
    padding: 6px 10px;
}
</style>