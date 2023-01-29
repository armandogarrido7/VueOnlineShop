<script setup>
import { useProductStore } from "../stores/ProductStore";
import { useUserStore } from "../stores/UserStore";

const productStore = useProductStore();
const userStore = useUserStore();
</script>
<template>
    
    <h1 class="text-center">Administration</h1>
    <h3 class="text-center">Add New Product</h3>
    <div class="d-flex flex-column px-5 mx-5">
        <label class="form-label">Name:<input type="text" required class="form-control" v-model="productStore.newProductName"></label>
        <label class="form-label">Description:<input type="text" required class="form-control" v-model="productStore.newProductDescription"></label>
        <label class="form-label">Price:<input type="number" required min=0 class="form-control" v-model="productStore.newProductPrice"></label>
        <label class="form-label">Image Url:<input type="url" required class="form-control" v-model="productStore.newProductImageURL"></label>
        <label class="form-label">Category:
            <select class="form-select" v-model="productStore.newProductCategory" :selected="productStore.newProductCategory" required>
                <option value="men" selected>Men</option>
                <option value="women">Women</option>
                <option value="electronics">Electronics</option>
                <option value="jewelry">Jewelry</option>
            </select>
        </label>
        <button type="submit" class="btn btn-success" @click="productStore.addNewProduct">Add Product</button>
    </div>
    <hr>
    <h3 class="text-center">Product List</h3>
    <div class="d-grid">
        <div class="row gap-3 mx-5 my-2 col-11" v-for="product in productStore.getProducts">
            <h5 class="h5 col-7">{{ product.name }}</h5>
            <button class="col-2 btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="productStore.setProductToEdit(product)">Edit</button>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="d-flex flex-column px-5 mx-5">
                            <label class="form-label">Name:<input type="text" required class="form-control" v-model="productStore.editProductName"></label>
                            <label class="form-label">Description:<input type="text" required class="form-control" v-model="productStore.editProductDescription"></label>
                            <label class="form-label">Price:<input type="number" required min=0 class="form-control" v-model="productStore.editProductPrice"></label>
                            <label class="form-label">Image Url:<input type="url" required class="form-control" v-model="productStore.editProductImageURL"></label>
                            <label class="form-label">Category:
                                <select class="form-select" v-model="productStore.editProductCategory" :selected="productStore.editProductCategory" required>
                                    <option value="men" selected>Men</option>
                                    <option value="women">Women</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="jewelry">Jewelry</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success" @click="productStore.updateProduct()">Save changes</button>
                    </div>
                </div>
                </div>
            </div>
            <button class="col-2 btn btn-danger" @click="productStore.deleteProduct(product.id)">Delete</button>
        </div>
    </div>
    <hr>
    <div class="col-12 d-flex justify-content-center">
        <button class="btn btn-primary col-1" @click="userStore.closeSession">Sign Out</button>
    </div>
</template>