// main.js renders app and mounts it to DOM
// the entire app gets loaded from main.js

import { createApp } from "vue"; // method from vue
import App from "./App.vue"; // App.vue is the root component in which all application code is nested
import router from "./router";
import store from "./store";
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App)
  .use(store)
  .use(router) // telling app to use router
  .mount("#app"); // creating and mounting app to div with id of app in index.html
