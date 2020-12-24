<template>
  <div id="footer">
    <div class="hero-foot footer">     
			<div class="columns" style="height: 100%;">    
        
				<div class="column is-2 is-offset-3">
          <div style="text-align: center;">
            <a class="button is-black is-outlined is-rounded" href="https://youtube.com/424recording">
              <span class="icon">
                <i class="fab fa-youtube"></i>
            	</span>
            </a>
            <a class="button is-black is-outlined is-rounded" href="https://patreon.com/424recording">
							<span class="icon">
								<i class="fab fa-patreon"></i>
							</span>
						</a>
						<a class="button is-black is-outlined is-rounded" href="https://discord.gg/h3pHAG5">
							<span class="icon">
								<i class="fab fa-discord"></i>
							</span>
						</a>
						<a class="button is-black is-outlined is-rounded" href="https://424recording.bandcamp.com">
							<span class="icon">
								<i class="fab fa-bandcamp"></i>
							</span>
						</a>
					</div>
				</div>

				<div class="column is-2 linkz">
					<p class="subtitle has-text-weight-bold">Info</p>
					<p><router-link to="/">Home (4-track Recording Tips)</router-link></p>
					<p><a href="tascam-model-12">Tascam Model 12</a></p>
					<p><a href="contact">Contact</a></p>
				</div>
		
				<div class="column is-2 linkz">
					<p class="subtitle has-text-weight-bold">Secret</p>
					<p><a href="be-cool-cowboy-bumbler">Bumbler</a></p>
					<p><a href="fall-song-challenge">Fall Song Challenge</a></p>
				</div>

			</div>

			<div style="margin-top: 30px;">
				<div style="text-align: center;">
					<i class="fas fa-copyright has-text-black">
					</i>
					<span class="linkz" style="color: black;">
						424 Recording 2020. 
						Powered by <a href="https://bulma.io">Bulma</a>. 
						Inspired by <a href="https://mmistakes.github.io/minimal-mistakes/">Minimal Mistakes</a>.
					</span>
				</div>	
			</div>

    </div>
	</div>
</template>

<script>
export default {
	name: 'Footer'
}
</script>
	
<style scoped>
 .footer {
    background-color: #0099FF; 
    background-color: hsl(204, 86%, 53%);
  }
 .linkz p {
    color: black;
  }
  .linkz a {
    color: black;
  }
  .linkz a:hover {
    color: white;
  }
</style>