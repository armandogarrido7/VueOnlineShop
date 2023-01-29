<script setup>
import { useUserStore } from "../stores/UserStore.js";
import { useProductStore } from "../stores/ProductStore.js"
const userStore = useUserStore();
const productStore = useProductStore();

</script>
<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid justify-content-between">
            <div>
              <RouterLink class="navbar-brand" to="/"><img id="show_home" class="img-fluid img-thumbnail" src="../assets/img/logo.svg" alt="logo"></RouterLink>
              <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button> -->
            </div>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link class="nav-link category" to="/men">Men</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link category" to="/women">Women</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link category" to="/jewelry">Jewelry</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link category" to="/electronics">Electronics</router-link>
                </li>
                <li class="nav-item" v-if="userStore.getAuthenticated">
                  <router-link class="nav-link category" to="/admin">Administration</router-link>
                </li>
              </ul>
            </div>
            <div class="d-flex gap-3">
              <RouterLink to="/signout" v-if="userStore.getAuthenticated" title="Sign Out" placeholder="Sign Out"  @click="userStore.closeSession">
                <i class="fa-solid fa-right-from-bracket fa-xl"></i>
              </RouterLink>
              <RouterLink v-else to="/login">
                <i class="fa-solid fa-user fa-xl"></i>
              </RouterLink>
              <RouterLink to="/cart">
                <i class="fa-solid fa-cart-shopping fa-xl position-relative">
                  <!-- <span v-if="productStore.getCart.length > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span class="visually-hidden">unread messages</span>
                  </span> -->
                  <span v-if="productStore.getCart.length > 0" class="position-absolute start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                    <span class="visually-hidden">New alerts</span>
                  </span>
                </i>
              </RouterLink>
              <i class="fa-solid fa-bars fa-xl" id="show_nav" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"></i>
            </div>
          </div>
        </nav>    
      </header>
</template>