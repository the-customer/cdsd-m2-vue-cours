<script setup>
import { ref } from "vue";

    let count = ref(0);

    const increment = ()=>{
        count++;
    }
</script>

<template>
    <div>
        <div>
            <p>
                <span>Compteur</span>
                <span>{{count}}</span>
            </p>
            <button @click="increment">Incrémenter</button>
        </div>
    </div>
</template>

<style scoped>

    p{
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        color: rgb(10, 134, 176);
    }
    p span:last-child{
        font-size: 3rem;
    }
    div p{
        width: 200px;
        height: 200px;
        border-radius: 1rem;
        background-color: lightblue;
    }
    button{
        background-color: #fff;
        color: rgb(10, 134, 176);
        border-radius: 1rem;
        padding: 15px 0;
        width: 200px;
        border: none;
        cursor: pointer;
    }

    div{
        width: 400px;
        height: 400px;
        border-radius: 1rem;
        background-color: rgb(10, 134, 176);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
    }
</style>