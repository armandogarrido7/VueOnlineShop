import { createRouter, createWebHistory } from 'vue-router';
import home from "../components/home.vue";
import men from "../components/men.vue";
import women from "../components/women.vue";
import jewelry from "../components/jewelry.vue";
import electronics from "../components/electronics.vue";
import login from "../components/login.vue";
import admin from "../components/admin.vue";
import register from "../components/register.vue";
import cart from "../components/cart.vue";
import product from "../components/product.vue";

import { useUserStore } from '../stores/UserStore';

const routes = [{
        path: '/',
        component: home,
        beforeEnter: (to, from) => {
            console.log("entrando en home");

        }
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/men',
        component: men
    },
    {
        path: '/women',
        component: women
    },
    {
        path: '/jewelry',
        component: jewelry
    },
    {
        path: '/electronics',
        component: electronics
    },
    {
        path: '/cart',
        component: cart,
        // beforeEnter: (to, from) => {
        //     if (!useUserStore().getAuthenticated) {
        //         // redirect the user to the login page
        //         return { name: 'login' }
        //     }
        // }
    },
    {
        path: '/login',
        component: login,
        name: 'login',
        beforeEnter: (to, from) => {
            if (useUserStore().getAuthenticated) {
                // redirect the user to the login page
                return { name: 'admin' }
            }
        }
    },
    {
        path: '/admin',
        component: admin,
        name: 'admin',
        beforeEnter: (to, from) => {
            if (!useUserStore().getAuthenticated) {
                return { name: 'login' }
            }
        }
    },
    {
        path: '/register',
        component: register,
        name: 'register',
        beforeEnter: (to, from) => {
            console.log("entrando en register");
        }
    },
    {
        path: '/product/:id',
        component: product,
        name: 'product',
        props: true
    },
    {
        path: '/signout',
        component: home,
        name: 'signout',
        beforeEnter: ((to, from) => {
            router.push('/');
        })
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})