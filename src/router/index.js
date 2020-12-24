// client-side routing
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"; // importing Home component from views directory

const routes = [
  // routes array with route objects
  {
    path: "/", // url
    name: "Home", // name of route
    component: Home // which 'view' component to render
  },
  {
    path: "/contact",
    name: "Contact",
    /* this is an example of a performance optimization
    ** this part of the app is not sent initially in case the user never clicks to this route
    ** route level code-splitting is for bigger apps that need to be optimized
    */ 
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router