import HomePage from "@/components/27_Router/pages/HomePage.vue";
import ProductDetailsPage from "@/components/27_Router/pages/ProductDetailsPage.vue";
import ProductsPage from "@/components/27_Router/pages/ProductsPage.vue";

import {
    createRouter,
    createWebHistory
} from "vue-router";

const routes = [{
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/products',
        name: 'products',
        component: ProductsPage
    },
    {
        path: '/products/:id',
        name: 'product.details',
        component: ProductDetailsPage,
        props: true
    },
];



const router = createRouter({
    history: createWebHistory(),
    routes
});


// exemple Simple Guard
router.beforeEach((to, from, next) => {
    console.log('Navigation: ', from.fullPath, '->', to.fullPath);
    //mettre votre logique
    // if (to.fullPath == "/products") return
    next();
});

export default router;