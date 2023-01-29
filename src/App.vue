<script setup>
import AppHeader from "./components/header.vue";
import AppFooter from "./components/footer.vue";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { useProductStore } from "./stores/ProductStore";
import { onMounted } from "vue";

const productStore = useProductStore();
onMounted(() => {
  productStore.isLoading = false;
})

</script>

<template>
  <Loading v-model:active="productStore.isLoading" loader="spinners" :is-full-page="true" color="#2591D8" :lock_scroll="true"></Loading>
  <AppHeader></AppHeader>
  <main>
    <RouterView></RouterView>
  </main>
  <AppFooter></AppFooter>
</template>
