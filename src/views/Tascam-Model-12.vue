<template>
	<div class="model-12">
		<div class="hero-body"> 
      <div class="tile is-ancestor">      
				<div class="tile is-parent">
						
					<div id="sidebar" class="tile is-child is-2">
            <Sidebar />
          </div>
                    
					<div id="invisibar" class="tile is-child is-1">
					</div>
                    
					<div id="middlebar" class="tile is-child is-6">
                    
          <!-- INTRO -->
                        
						<p class="title has-text-weight-bold">
							Tascam Model 12 Multitrack Recording
						</p>
                                
						<div id="intro-div" class="tile is-parent" style="margin-bottom: -1em;">
									
							<div id="model-12-text-padding" class="tile is-child is-8">
								<p class="block"> 
									The Tascam Model 12 is a great digital multitrack recorder and mixer.
								</p>
								<p class="block">
									If you're thinking about getting a Tascam Model 12 and find this information helpful, 
									you can support more Tascam Model 12 tutorials by 
									<router-link to="/">
										clicking through to Amazon or zZounds from the homepage
									</router-link>
									and making a purchase.
								</p>
								<p class="block">   
									The channel receives a commission at no extra cost to you.
									Thanks for your support, happy recording, and let me know if you have any questions!
								</p>
							</div>

							<div id="model-12-padding" class="tile is-child is-4">		
								<img id="model-12-pic" class="is-square" 
										style="width: 100%; height: 100%; object-fit: contain; margin: auto;" 
										src="../assets/model-12.jpg">		
							</div>
						</div> <!-- INTRO closing div -->
                        
						<!-- VIDEOS -->

						<p class="title has-text-weight-bold" style="margin-top: 1em;">
							Tascam Model 12 Tutorials
						</p>

						<VideoCard v-for="video in recvideos" :key="video.id" :video="video" />

						<p class="title has-text-weight-bold" style="margin-top: 1em;">
								Tascam Model 12 Review
						</p>

						<VideoCard v-for="video in revvideos" :key="video.id" :video="video" />
				
						<div id="4-track-note" style="margin-top: 2em;">
								<div id="gear-box" class="card" style="padding: 1em 2em 2em 2em; background-color: lightgray;">
								<h2 class="block subtitle has-text-dark has-text-weight-bold">
										A Note for 4-track Users
								</h2>
								<p class="block">    
										The more I've been using the Tascam Model 12, the more I'm realizing it is the Tascam 424 mkiv we've been waiting for.
								</p>
								<p class="block">  
										The only differences I've encountered are the Model 12 doesn't record to cassette and the preamps are upgraded (and each channel has a built in compressor).
								</p>
								<p class="block">    
										Unless there's a specific reason you want to record to cassette, I think you'll find the Model 12 to be a superior alternative to a vintage 4-track.
								</p>
								<p class="block">
										Due to the rising prices of 4-tracks (and the amount of emails I've been receiving from people getting burned by resellers)
										I recommend at least giving the Tascam Model 12 a shot.
								</p>
								<p class="block">
										I feel like recording on the Model 12 is the 4-track experience with none of the headache
										(though some people would argue the headache is part of the charm.)
								</p>
								<p class="block"> 
										Whether you're just starting out, or coming over from 4-track recording, I think you'll feel right at home on a Model 12.
										Happy recording!
								</p>
								</div>
						</div>
						
						<p class="buttons has-addons is-right">
								<a href="tascam-model-12" title="Back to Top">
										<button class="button is-info is-light">
												<span class="icon is-small">
														<i class="fas fa-arrow-up"></i>
												</span>
										</button>
								</a>
						</p>
									
				</div> <!-- mainbar closing div -->
			</div> <!-- first parent tile closing div -->
		</div> <!-- first ancestor tile closing div -->
	</div> <!-- hero body closing div -->
</div>
</template>

<script>

import GearService from '@/services/GearService.js'
import Sidebar from '@/components/Sidebar.vue'
import VideoCard from '@/components/VideoCard.vue'

export default {
	name: 'Tascam-Model-12',
	components: {
		Sidebar,
		VideoCard
  },
  data() {
    return {
			recvideos: null,
			revvideos: null
    }
	},
    /* created is a lifecycle hook
    ** when this component is created, call out to the server for videos data
    */
  created() {
    GearService.getRecVideos()
    .then(response => {
      this.recvideos = response.data
    })
    .catch(error => {
      console.log(error)
		}),
		GearService.getRevVideos()
    .then(response => {
      this.revvideos = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>

<style>

</style>