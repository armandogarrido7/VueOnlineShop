<script setup>
import { useProductStore } from '../stores/ProductStore';

const productStore  = useProductStore();
// var product_data = query(collection(db, "products"), where(documentId(), "==", "jewelry")).get();

</script>

<template>
    <div class="card mx-5 my-3">
        <img :src="productStore.activeProduct.img_url" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ productStore.activeProduct.name }}</h5>
          <p class="card-text">{{ productStore.activeProduct.description }}</p>
          <label>Quantity:
            <input type="number" min=1 class="form-control" v-model="productStore.quantity">
          </label>
          <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="productStore.addProductToCart">Add to Cart</button>
          <!-- <button class="btn btn-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" @click="productStore.addProductToCart">Add to Cart</button> -->
          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Product added to Cart</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Product Sucessfully added to Cart!
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <div>
                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
              </div>
              <div class="dropdown mt-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  Dropdown button
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
          </div> -->
        </div>
      </div>
</template>