<template>
<div id="app">
  <!-- App.vue is the root component in which all application code is nested -->
  <!-- main.js takes application code and mounts it to the DOM in the div with id of app in index.html -->
  <!-- vue and vue router never reload the page: they simply render the router path that the user clicks -->
  <section class="hero"> 
    <Nav />
    
    <router-view /> <!-- router-view is a placeholder that is replaced by the route's actual component -->  
    
    <Footer />
  </section>

</div>
</template>

<script>
  import Nav from '@/components/Nav.vue'
  import Footer from '@/components/Footer.vue'
  
export default {
  components: {
    Nav, Footer
  }
}
</script>

<!-- global styles -->
<style>
  #app {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  @media screen and (max-width: 769px) {
    #sidebar, #invisibar {
      display: none;
    }
  }
</style>