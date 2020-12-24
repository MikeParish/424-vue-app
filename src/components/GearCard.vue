<template>
  <div class="gear-card">
    <!-- Display gear data -->
    <div id="gear-box" class="card" style="margin-top: 2em;">
      <span class="icon" style="margin: 1em; position: absolute; color: tomato;">
        <i class="fas fa-star fa-2x">
        </i>
      </span>
    
      <div class="tile is-parent" style="padding: 1em 2em 2em 2em;">

        <div class="tile is-child is-4">
          <figure class="image is-4by3" style="margin: 1em">
            <a  :href="gear.zzolink"
                @click="outbounderZ(gear.zzolink)"
                rel="nofollow">
            <img  style="width: 100%; height: 100%; object-fit: contain;" 
                  :src="gear.imglink">
            </a>
          </figure>
        </div>
          
        <div class="tile is-child is-8">
          <h2 id="gear-title" class="subtitle has-text-weight-bold">
            <a  :href="gear.zzolink" 
                @click="outbounderZ(gear.zzolink)"
                rel="nofollow">
                {{ gear.title }}
            </a>
            <span>&nbsp;{{ gear.category }}</span>
          </h2>
            <p> 
              {{ gear.description }}
            </p>
              
            <p class="buttons" style="margin-top: 1.5em;">

              <a  
                class="button is-warning" 
                :href="gear.amzlink"
                @click="outbounderA(gear.amzlink)"
                rel="nofollow">
                <span class="icon">
                  <i class="fab fa-amazon"></i>
                </span>
                <span>Amazon</span>
              </a>
      
              <a  
                class="button is-link" 
                :href="gear.zzolink" 
                @click="outbounderZ(gear.zzolink)"
                rel="nofollow">
                <span class="icon">
                  <i class="fas fa-guitar"></i>
                </span>
                <span>zZounds</span>
              </a>
        
            </p>
              
          </div>
          
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GearCard',
  // props are custom attributes for passing data into a component
  props: {
    gear: Object
  },
  methods: {
    outbounderZ(link) {
      console.log('Hey, z clicked')
      console.log(link + ' this is the clicked link')
      //getOutboundLink(link) 
      //return false;
    },
    outbounderA(link) {
      console.log('Hey, a clicked')
      console.log(link + ' this is the clicked link')
      //getOutboundLink(link) 
      //return false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
