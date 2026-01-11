<script setup>
const props = defineProps({
    items:{ type: Array, required:true }
})
</script>

<template>
    <aside class="box">
        <h3>Panier(0)</h3>

        <p v-if="items.length === 0" class="empty">Panier est vide!</p>

        <ul v-else class="list">
            <li v-for="(i,pos) in items" :key="i.id">
                {{pos}} {{i.name}} - {{i.price}} FCFA
            </li>
        </ul>
    </aside>
</template>

<style scoped>
    .box{
        padding: 14px;
        border: 1px solide #eee;
        border-radius: 12px;
        background: #fafafa;
    }

    .empty{
        color: #666;
    }
    .list{
        margin: 10px 0 0;
        padding-left: 18px;
    }
</style>