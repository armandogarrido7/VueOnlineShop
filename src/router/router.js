// import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: HomeView,
//     },
//     {
//       path: "/about",
//       name: "about",
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import("../views/AboutView.vue"),
//     },
//   ],
// });

// export default router;
import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory } from 'vue-router';
import home from "../components/home.vue";
import men from "../components/men.vue";
import women from "../components/women.vue";
import jewelry from "../components/jewelry.vue";
import electronics from "../components/electronics.vue";
import new_product from "../components/newProduct.vue";
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
        path: '/new_product',
        component: new_product,
        beforeEnter: (to, from) => {
            return useUserStore().getAuthenticated
        }
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
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})