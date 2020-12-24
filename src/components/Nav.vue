<template>
  <div id="nav">
  	<div class="hero-head" style="background-color: #0099FF;">
    	<nav class="navbar">
      
        <div class="container">
                    
          <div class="navbar-brand">
            
						<router-link class="navbar-item" to="/"> <!-- 'to' specifies which path in router index.js -->
              <img src="../assets/424-logo-web.png" alt="424 Logo">
						</router-link>
            
						<span class="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
        	</div> 
					
					<div id="navbarMenu" class="navbar-menu" style="background-color: #0099FF;">
						<div class="navbar-end">
								
							<span class="navbar-item">
								<router-link class="button is-black is-outlined" to="/">
									<span class="icon">
										<i class="fas fa-tape"></i>
									</span>
									<span>4-track Tips</span>
								</router-link>
							</span>

							<span class="navbar-item">
								<a class="button is-black is-outlined" href="tascam-model-12">
									<span class="icon">
										<i class="fas fa-file-audio"></i>
									</span>
									<span>Model 12</span>
								</a>
							</span>
							
							<span class="navbar-item">
								<a class="button is-black is-outlined" href="contact">
									<span class="icon">
										<i class="fas fa-envelope"></i>
									</span>
									<span>Contact</span>
								</a>
							</span>
							
							<span class="navbar-item">
								<a class="button is-black is-outlined" href="https://youtube.com/424recording">
									<span class="icon">
										<i class="fab fa-youtube"></i>
									</span>
									<span>YouTube</span>
								</a>
							</span>
							
							<span class="navbar-item">
								<a class="button is-black is-outlined" href="https://www.patreon.com/424recording">
									<span class="icon">
										<i class="fab fa-patreon"></i>
									</span>
									<span>Patreon</span>
								</a>
							</span>
							
							<span class="navbar-item">
								<a class="button is-black is-outlined" href="https://discord.gg/h3pHAG5">
									<span class="icon">
										<i class="fab fa-discord"></i>
									</span>
									<span>Discord</span>
								</a>
							</span>
							
							<span class="navbar-item">
								<a class="button is-black is-outlined" href="https://424recording.bandcamp.com">
									<span class="icon">
										<i class="fab fa-bandcamp"></i>
									</span>
									<span>Bandcamp</span>
								</a>
							</span>            
						</div>
					</div>
				</div>
			</nav>
		</div>
  </div>
</template>

<script>
export default {
	name: 'Nav'
}
</script>

<style>

</style>