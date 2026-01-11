<script setup>
import { reactive } from "vue"


const client = reactive({
    fullName: '',
    phone: ''
})


const onSubmit = ()=>{
    alert(`Client : ${client.fullName} - ${client.phone}`);
}
</script>

<template>
    <section class="card">
        <h2>14. Forms</h2>

        <form @submit.prevent="onSubmit">
            <!-- <input @input="(e)=>client.fullName=e.target.value" :value="client.fullName" type="text" placeholder="Nom complet"> -->
            <input v-model="client.fullName" type="text" placeholder="Nom complet">
            <input v-model="client.phone" type="text" placeholder="Telephone">
            <button>Valider</button>
        </form>
        <hr>
        <hr>
        <pre>
            {{client}}
        </pre>
    </section>
</template>

<style scoped>
    form{ display: flex; gap: 10px; flex-wrap: wrap;}
    input{ padding: 8px; border: 1px solid #ddd; border-radius: 8px; }
    hr{margin-top: 5px;}
</style>