<script setup>
import { useUserStore } from "../stores/UserStore";

const userStore = useUserStore(); 

</script>
<template>
    <h1 class="col-12 text-center">Register</h1>
    <form>
        <div class="fluid-container form-group col-12 justify-content-center">
            <label><i class="fa-solid fa-envelope"></i> Email<input type="email" name="email" v-model="userStore.register_email" class="form-control"></label>
        </div>
        <div class="form-group">
            <label><i class="fa-solid fa-key"></i> Password<input type="password" name="password" v-model="userStore.register_password" class="form-control"></label>
        </div>
        <button class="btn btn-primary" @click="userStore.register">Register</button>
    </form>
</template>