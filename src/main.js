import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router/router.js";
import { LoadingPlugin } from 'vue-loading-overlay';
// import 'vue-loading-overlay/dist/vue-loading.css';
import 'vue-loading-overlay/dist/css/index.css';

// import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

app.use(LoadingPlugin);
app.use(pinia);
app.use(router);
app.mount("#app");