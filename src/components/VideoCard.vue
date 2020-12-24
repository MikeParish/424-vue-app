<template>
  <div class="video-card">
		<!-- display video data -->
		<div id="videos-div" style="margin-top: 2em;">
							
			<div style="position: relative; overflow: hidden; width: 100%; padding-top: 56.25%;">
				<iframe style="position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%;" 
								:src="video.ytlink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
				</iframe>
			</div>

			<div id="gear-box" class="card" style="padding: 1em 2em 2em 2em;">
								
				<h2 class="subtitle has-text-weight-bold">
					{{ video.title }}
				</h2>
						
				<p> 
					{{ video.description }}
				</p>   

			</div>

		</div>
	</div>
</template>

<script>
export default {
	name: 'VideoCard',
  // props are custom attributes for passing data into a component from a parent component (works like a funnel)
  props: {
    video: Object
  },
}
</script>

<style>

</style>