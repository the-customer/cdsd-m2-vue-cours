<script setup>
import vFocus from './vFocus';
</script>

<template>
    <section class="card">
        <h2>24. Custom Directives</h2>

        <input v-focus placeholder="Focus automatique" type="text" class="input">

        <p class="note">
            Les directives sont utilisés pour encapsuler un composant DOM.
        </p>
    </section>
</template>


<style scoped>
.card {
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 12px;
}

.input {
    padding: 8px 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.note {
    margin-top: 10px;
    color: #555;
}
</style>