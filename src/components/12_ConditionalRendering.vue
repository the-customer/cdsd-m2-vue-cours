<script setup>
import { ref } from "vue";

const isvisible = ref(false)
const type = ref('info')
</script>
<template>
    <div>
        <div v-if="isvisible" class="screen">
            <p v-if="type=='info'" class="info">Info</p>
            <p v-if="type=='success'" class="success">Success</p>
            <p v-if="type=='error'" class="error">Error</p>
        </div>
        <button @click="isvisible =! isvisible" class="main">{{isvisible ? 'Cacher' : 'Afficher'}}</button>
        <button @click="type='success'" class="success">Succès</button>
        <button @click="type='error'" class="error">Erreur</button>
        <button @click="type='info'" class="info">Info</button>
    </div>
</template>

<style scoped>
    .screen{
        width: 180px;
        padding: 20px 0;
        text-align: center;
    }
    button.main{
        display: block;
        width: 180px;
        background-color: #fff;
        color: gray;
        border: 2px solid gray;
        margin-bottom: 1rem;
    }
    .error{
        background-color: #fff;
        color: rgb(215, 89, 89);
        border: 2px solid rgb(215, 89, 89);
    }
    .info{
        background-color: #fff;
        color: cornflowerblue;
        border: 2px solid cornflowerblue;
    }
    .success{
        background-color: #fff;
        color: rgb(66, 145, 66);
        border: 2px solid rgb(66, 145, 66);
    }
    button{
        outline: none;
        padding: 8px 0;
        width: 60px;
        cursor: pointer;
    }
</style>