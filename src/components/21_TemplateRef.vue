<script setup>
import { onMounted, ref } from 'vue';

const nameInput = ref(null)
const boxRef = ref(null)


onMounted(() => {
    nameInput.value.focus()
    // setTimeout(() => {
    //     nameInput.value.style.display = "none"
    // }, 1000)
})

function scrollToBox() {
    boxRef.value.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
    <section class="card">
        <h2>21. Template Refs</h2>
        <input ref="nameInput" type="text" placeholder="Nom du Client" class="input">
        <button @click="scrollToBox" class="btn">Scroller vers la zone</button>

        <div style="height: 1000px;"></div>

        <div ref="boxRef" class="box">
            Zone cible
        </div>

        <p class="note">
            <code>ref="..."</code> permet d'acceder au DOM de façon controlée.
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

.box {
    padding: 20px;
    background: #f5f5f5;
    border-radius: 12px;
    text-align: center;
    font-weight: 600;
}

.btn {
    margin-top: 10px;
    color: #555;
}
</style>