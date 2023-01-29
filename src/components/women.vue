<script setup>
import { useProductStore } from '../stores/ProductStore';

const productStore = useProductStore();

</script>
<template>
    <h3 class="text-center m-4">Women's Clothing</h3>
    <div class="d-flex flex-wrap justify-content-around">
        <h4 v-if="productStore.getWomenProducts == 0" class="text-danger text-center h4">There's no products in selected category, try with another!</h4>
        <div v-else v-for="product in productStore.getWomenProducts" class="card d-flex justify-content-center p-3 my-3">
            <img :src=product.img_url class="card-img-top card_image">
                <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.description }}</p>
                <p>{{ product.price }}€</p>
                <RouterLink @click="productStore.setActiveProduct(product)" :to="{name:'product', params:{
                    id:product.id
                }}" class="btn btn-primary">See Product</RouterLink>
            </div>
        </div>
    </div>
</template>