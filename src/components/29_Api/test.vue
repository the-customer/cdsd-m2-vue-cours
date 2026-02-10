<script setup>
import { onMounted, ref } from 'vue';
import { productService } from './services/product.service';
import { useApi } from './composables/useApi';
import { saleService } from './services/sale.service';

const { data: products, loading, error, execute: loadProducts } = useApi(productService.list)

const { data: sale, loading: loadSale, error: eSale, execute } = useApi(saleService.create)

async function simulateSale() {
    execute({
        date: new Date().toISOString(),
        total: 12800,
        paymentMethod: "CASH"
    })
    alert("Vente simulee")
}


onMounted(async () => {
    loadProducts()
})
</script>
<template>
    <div class="card">
        <h1>29 - Api</h1>
        <p class="muted">
            HPPT centralisé + services métiers + composable
        </p>
        <p v-if="error">Erreur lors du chargement : {{ error }}</p>
        <h1 v-if="loading">Chargement...</h1>
        <ul v-else>
            <li v-for="p in products" :key="p.id">
                {{ p.name }} - {{ p.price.toLocaleString() }} FCFA
            </li>
        </ul>

        <button class="btn" @click="simulateSale">
            Simuler une vente
        </button>
    </div>
</template>
<style scoped>
.card {
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 14px;
}

.muted {
    color: #666;
}

.error {
    color: #c00;
}

.btn {
    margin-top: 12px;
    padding: 8px 10px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: white;
    cursor: pointer;
}
</style>
