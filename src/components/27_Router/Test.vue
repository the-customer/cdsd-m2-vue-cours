<template>
    <div class="card">
        <h2>27. Router</h2>

        <nav class="nav">
            <router-link to="/">Accueil</router-link>
            <router-link to="/products">Produits</router-link>
        </nav>


        <div class="row">
            <router-view />
        </div>
    </div>
</template>


<style scoped>
.card {
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 12px;
}

.nav {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
}

.nav a.router-link-active {
    font-weight: bold;
    text-decoration: underline;
}

.view {
    padding: 12px;
    border: 1px dashed #ccc;
}
</style>