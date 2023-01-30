<script setup>
import { useUserStore } from "../stores/UserStore";

const userStore = useUserStore();

</script>
<template>
    <h1 class="col-12 text-center">Login</h1>
    <div class="row justify-content-center m-auto">
      <div class="login_email col-3">
        <div class="form-group">
          <label><i class="fa-solid fa-envelope"></i> Email<input type="email" name="email" v-model="userStore.login_email" class="form-control"></label>
        </div>
        <div class="form-group">
          <label><i class="fa-solid fa-key"></i> Password<input type="password" name="password" v-model="userStore.login_password" class="form-control"></label>
        </div>
        <button class="btn btn-info col-4" @click="userStore.login">Login</button>
      </div>
      <div class="login_google col-3 offset-2 align-content-center justify-content-center">
        <button class="btn btn-info" @click="userStore.loginWithGoogle">Login With Google <i class="fa-brands fa-google fa-xl"></i></button>
      </div>
      
    </div>
        

</template>