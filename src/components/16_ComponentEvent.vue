<script setup>
    const props = defineProps({
        // product:Object,
        product:{ type: Object, required:true }
    })

    const emit = defineEmits(['add-to-cart']);

    function add(){
        emit('add-to-cart',props.product)
    }
</script>


<template>
    <article class="card">
        <h3 class="name">{{product.name}}</h3>
        <p class="price">{{product.price}} FCFA</p>
        <button @click="add" class="btn">Ajouter</button>
    </article>
</template>


<style scoped>
    .name{ margin: 0; font-size: 16px; }
    .price{ margin: 6px 0 0; font-weight: 700; }
    .meta{ margin: 0; font-size: 12px; color: #666; }
    .btn{ font-size:8px; padding: 4px 5px; border: 1px splid #ddd; border-radius: 10px; background-color: #777; cursor: pointer; color: #eee; }
</style>