<script setup>
import { useProductStore } from '../stores/ProductStore';
const productStore = useProductStore();
</script>

<template>
<h2 class="text-center">Shopping Cart</h2>
<div id="cart" v-if="productStore.getCart.length > 0" class="mx-5 my-3">
    <div v-for="product in productStore.getCart" class="row border rounded-2 border-secondary align-items-center p-3 my-3">
        <img class="fluid-img col-2 product_cart_img" :src="product.img_url">
        <h3 class="col-4">{{ product.name }}</h3>
        <div class="col-2 offset-2 btn-group cart_product_quantity" role="group">
            <span class="btn btn-outline-primary border border-2 rounded-1 border-secondary p-2" @click="productStore.removeUnitToProductCart(product.id)">
                <i class="fa-solid fa-minus fa-xl"></i>
            </span>
            <span class="btn btn-light disabled border border-2 rounded-1 border-secondary p-2 text-dark">{{product.quantity}}</span>
            <span class="btn btn-outline-primary border border-2 rounded-1 border-secondary p-2" @click="productStore.addUnitToProductCart(product.id)">
                <i class="fa-solid fa-plus fa-xl"></i>
            </span>
        </div>
        <div class="btn btn-light col-1 disabled text-dark">
            {{ product.price * product.quantity }} €
        </div>
        <div class="btn btn-danger col-1" @click="productStore.removeProductFromCart(product.id)">
            <i class="fa-solid fa-trash fa-xl"></i>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-3 offset-8">
            <h4 class="h4">Cart Price: {{ productStore.getCartPrice }} €</h4>
        </div>
    </div>
</div>
<div v-else>
    <h4 class="text-danger text-center h4">There are no products in your shopping cart, add some more!</h4>
</div>
</template>