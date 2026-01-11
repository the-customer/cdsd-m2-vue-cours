<script setup>
    defineProps({
        // product:Object,
        product:{
            type: Object,
            required:true,
            validator(value){
                //Validation metier
                return (value &&
                typeof value.id === 'number' &&
                typeof value.name === 'string' &&
                typeof value.price === 'number' &&
                typeof value.price > 0)
            }
        },
    })
</script>


<template>
    <article class="card">
        <h3 class="name">{{product.name}}</h3>
        <p class="price">{{product.price}} FCFA</p>
        <p class="meta">{{product.id}}</p>
    </article>
</template>


<style scoped>
    .name{ margin: 0; font-size: 16px; }
    .price{ margin: 6px 0 0; font-weight: 700; }
    .meta{ margin: 0; font-size: 12px; color: #666; }
</style>