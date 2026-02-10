<script setup>
import { onMounted, computed } from "vue";
import { useCartStore } from "./stores/cart.store";
import { useUiStore } from "./stores/ui.store";
import { useAuthStore } from "./stores/auth.store";

const cart = useCartStore();
const ui = useUiStore();
const auth = useAuthStore();

const products = [
    { id: 1, name: "Stylo", price: 500 },
    { id: 2, name: "Cahier", price: 1500 },
    { id: 3, name: "Classeur", price: 3500 },
    { id: 4, name: "Crayon", price: 300 },
];

onMounted(() => {
    cart.hydrate();
    auth.hydrate();
});

const total = computed(() => cart.subTotal);
</script>

<template>
    <div class="card">
        <header class="head">
            <div>
                <h1>28 — Pinia (Cart Store)</h1>
                <p class="muted">
                    Store global + getters + actions + persistance localStorage.
                </p>
            </div>

            <div class="auth">
                <span class="pill">Auth: {{ auth.isAuthenticated ? "ON" : "OFF" }}</span>
                <span class="pill">Role: {{ auth.role }}</span>

                <button v-if="!auth.isAuthenticated" class="btn" @click="auth.loginAs('CASHIER')">
                    Login (fake)
                </button>
                <button v-else class="btn" @click="auth.logout()">Logout</button>
            </div>
        </header>


        <div class="toasts" v-if="ui.toasts.length">
            <div v-for="t in ui.toasts" :key="t.id" class="toast">
                <strong>{{ t.type }}</strong> — {{ t.message }}
            </div>
        </div>

        <div class="layout">
            <!-- Catalog -->
            <section class="panel">
                <h2>Catalogue</h2>
                <div class="grid">
                    <button v-for="p in products" :key="p.id" class="product"
                        @click="cart.add(p); ui.toast(`Ajouté: ${p.name}`, 'success')">
                        <span class="name">{{ p.name }}</span>
                        <span class="price">{{ p.price.toLocaleString() }} FCFA</span>
                    </button>
                </div>
            </section>

            <!-- Cart -->
            <section class="panel cart">
                <div class="cartHead">
                    <h2>Panier</h2>
                    <button class="btn" @click="cart.clear(); ui.toast('Panier vidé', 'info')">
                        Vider
                    </button>
                </div>

                <p class="muted" v-if="cart.items.length === 0">Panier vide.</p>

                <div v-else class="items">
                    <div v-for="i in cart.items" :key="i.id" class="row">
                        <div class="left">
                            <strong>{{ i.name }}</strong>
                            <span class="muted">
                                {{ i.price.toLocaleString() }} × {{ i.qty }}
                            </span>
                        </div>

                        <div class="right">
                            <span class="amount">{{ (i.price * i.qty).toLocaleString() }} FCFA</span>

                            <button class="btnSmall" @click="cart.dec(i.id)">-</button>
                            <button class="btnSmall" @click="cart.inc(i.id)">+</button>
                            <button class="btnSmall danger" @click="cart.remove(i.id)">
                                x
                            </button>
                        </div>
                    </div>
                </div>

                <div class="summary">
                    <div class="line">
                        <span>Articles</span>
                        <strong>{{ cart.countItems }}</strong>
                    </div>
                    <div class="line">
                        <span>Total</span>
                        <strong>{{ total.toLocaleString() }} FCFA</strong>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
.card {
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 14px;
    background: #fff;
}

.head {
    display: flex;
    justify-content: space-between;
    gap: 14px;
    align-items: start;
    border-bottom: 1px solid #eee;
    padding-bottom: 12px;
}

.muted {
    color: #666;
    margin-top: 4px;
}

.auth {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
}

.pill {
    padding: 6px 10px;
    border: 1px solid #eee;
    border-radius: 999px;
    background: #fafafa;
    font-size: 12px;
    font-weight: 700;
}

.layout {
    margin-top: 14px;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 12px;
    align-items: start;
}

@media (max-width: 900px) {
    .layout {
        grid-template-columns: 1fr;
    }
}

.panel {
    padding: 14px;
    border: 1px solid #f0f0f0;
    border-radius: 14px;
    background: #fafafa;
}

.grid {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
}

@media (max-width: 500px) {
    .grid {
        grid-template-columns: 1fr;
    }
}

.product {
    text-align: left;
    padding: 12px;
    border: 1px solid #eee;
    border-radius: 12px;
    background: white;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.name {
    font-weight: 700;
}

.price {
    color: #666;
    font-size: 12px;
}

.cartHead {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.items {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.row {
    padding: 10px;
    background: white;
    border: 1px solid #eee;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
}

.left {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.right {
    display: inline-flex;
    gap: 6px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
}

.amount {
    font-weight: 800;
    margin-right: 6px;
}

.btn {
    padding: 8px 10px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: white;
    cursor: pointer;
}

.btnSmall {
    padding: 6px 8px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: white;
    cursor: pointer;
}

.danger {
    border-color: #f1b4b4;
}

.summary {
    margin-top: 12px;
    border-top: 1px solid #eee;
    padding-top: 10px;
}

.line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
}

.toasts {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.toast {
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 12px;
    background: #fafafa;
}
</style>
