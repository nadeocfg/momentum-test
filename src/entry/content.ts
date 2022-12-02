// Init vue app
import { createApp } from "vue";
import App from "../app.vue";
import router from "../router";
import store from "../store";

// Create div element and append it to body tag
const body = document.querySelector("body");
const div = document.createElement("div");
div.setAttribute("id", "app");

if (body) {
  body.appendChild(div);
}

// Create App instance
const app = createApp(App);

// Use vue router
app.use(router);

// Use vue store
app.use(store);

// Mount App
app.mount("#app");
