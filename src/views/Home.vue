<template>
  <div class="gears">
    
    <div class="hero-body"> 
      <div class="tile is-ancestor">      
        <div class="tile is-parent">

          <div id="sidebar" class="tile is-child is-2">
            <Sidebar />
          </div>
          
          <div id="invisibar" class="tile is-child is-1">
          </div>
          
          <div id="middlebar" class="tile is-child is-6">
            
            <div id="popular-gear-div">
              <p class="title">Popular Gear</p>  
            <GearCard v-for="gear in popgears" :key="gear.id" :gear="gear" />
            </div>

            <div id="gear-div">
              <p class="title" style="margin-top: 1em;">Other Gear</p>  
            <GearCard v-for="gear in gears" :key="gear.id" :gear="gear" />
            </div>
          
          </div>
      
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import GearService from '@/services/GearService.js'
import Sidebar from '@/components/Sidebar.vue'
import GearCard from '@/components/GearCard.vue'

export default {
  name: 'Home',
  components: {
    Sidebar,
    GearCard
  },
  data() {
    return {
      popgears: null,
      gears: null
    }
  },
    /* created is a lifecycle hook
    ** when this component is created, call out to the server for popgears and gears data
    */
  created() {
    GearService.getPopGears()
    /* GearService.getGears() is the same GET request as axios.get('mockdatabase-link')
    ** but refactored to be used globally with @/services/GearService.js
    ** axios is promise-based and asynchronous: 
    ** we need to make sure we're waiting for the reponse of the request to resolve
    */
    .then(response => {
      // callback to execute when promise is resolved
      this.popgears = response.data
    })
    // in case an error happens during the call, we'll grab it with catch
    .catch(error => {
      // callback to execute if promise is rejected
      console.log(error)
    })
    GearService.getGears()
    .then(response => {
      this.gears = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>

<style>

</style>