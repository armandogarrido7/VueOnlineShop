<script async setup>
import carrousel from './slider.vue';
import { onBeforeUpdate, onBeforeMount, onMounted, onUpdated } from "vue";
import { useProductStore } from "../stores/ProductStore";
const productStore = useProductStore();
onBeforeUpdate(() => {
  productStore.activeLoader = productStore.loader.show({});
  console.log('before');
});
onUpdated(()=>{
  productStore.activeLoader.hide();
  console.log('after');
})
</script>

<template>
    <carrousel></carrousel>
</template>
