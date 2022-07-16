<template>
	<header>
		<router-link to="/">
			<img src="../assets/logo.png" alt="Logotipo de TheDarkSide">
		</router-link>
		<button v-if="!navOpened" @click="navOpened = true" class="mobile-burger mobile">
			<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M32.5812 17.875H6.41875C5.56616 17.875 4.875 18.5662 4.875 19.4187V19.5813C4.875 20.4338 5.56616 21.125 6.41875 21.125H32.5812C33.4338 21.125 34.125 20.4338 34.125 19.5813V19.4187C34.125 18.5662 33.4338 17.875 32.5812 17.875Z"
					fill="black"/>
				<path
					d="M32.5812 26H6.41875C5.56616 26 4.875 26.6912 4.875 27.5438V27.7062C4.875 28.5588 5.56616 29.25 6.41875 29.25H32.5812C33.4338 29.25 34.125 28.5588 34.125 27.7062V27.5438C34.125 26.6912 33.4338 26 32.5812 26Z"
					fill="black"/>
				<path
					d="M32.5812 9.75H6.41875C5.56616 9.75 4.875 10.4412 4.875 11.2937V11.4563C4.875 12.3088 5.56616 13 6.41875 13H32.5812C33.4338 13 34.125 12.3088 34.125 11.4563V11.2937C34.125 10.4412 33.4338 9.75 32.5812 9.75Z"
					fill="black"/>
			</svg>
		</button>
		<button v-else @click="navOpened = false" class="mobile-burger mobile">
			<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2.5 2.5L20.5 20.5" stroke="black" stroke-width="3" stroke-linecap="round"
						stroke-linejoin="round"/>
				<path d="M20 2L2 20" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
		<transition name="dissolve" appear>
			<nav v-if="navOpened" class="mobile-nav-container mobile">
				<transition name="slide" appear>
					<!--		"appear"	makes transition to work when it's inside "v-if"	-->
					<div v-show="navOpened" class="mobile-nav">
						<router-link class="bold" @click="navOpened = false" to="/">Home</router-link>
						<router-link class="bold" @click="navOpened = false" to="/exposicion">Sobre la Exposición
						</router-link>
						<div>
							<a class="bold">Quiénes somos</a>
							<div class="artists-list">
								<router-link @click="navOpened = false" to="/artistas/mikel-sarrias">Mikel Sarrias</router-link>
								<router-link @click="navOpened = false" to="/artistas/evelin-virunurm">Evelin Virunurm
								</router-link>
								<router-link @click="navOpened = false" to="/artistas/alonso-hogue">Alonso Hogue</router-link>
								<router-link @click="navOpened = false" to="/artistas/karen-yaniz">Karen Yániz</router-link>
								<router-link @click="navOpened = false" to="/artistas/alexander-rozinov">Alexander Rozinov
								</router-link>
								<router-link @click="navOpened = false" to="/artistas/andrea-gozalves">Andrea Gozalves
								</router-link>
							</div>
						</div>
					</div>
				</transition>
			</nav>
		</transition>
		<nav class="desktop-nav-container desktop">
			<ul class="desktop-nav">
				<li>
					<router-link class="bold" to="/">Home</router-link>
				</li>
				<li>
					<router-link class="bold" to="/exposicion">Sobre la Exposición</router-link>
				</li>
				<li class="bold hovereable">Quiénes somos</li>
				<div class="artists-list-container">
					<ul class="artists-list">
						<li>
							<router-link @click="navOpened = false" to="/artistas/mikel-sarrias">Mikel Sarrias</router-link>
						</li>
						<li>
							<router-link @click="navOpened = false" to="/artistas/evelin-virunurm">Evelin Virunurm
							</router-link>
						</li>
						<li>
							<router-link @click="navOpened = false" to="/artistas/alonso-hogue">Alonso Hogue</router-link>
						</li>
						<!--						<li>
													<router-link @click="navOpened = false" to="/artistas/karen-yaniz">Karen Yániz</router-link>
												</li>-->
						<li>
							<router-link @click="navOpened = false" to="/artistas/alexander-rozinov">Alexander Rozinov
							</router-link>
						</li>
						<li>
							<router-link @click="navOpened = false" to="/artistas/andrea-gozalves">Andrea Gozalves
							</router-link>
						</li>

					</ul>
				</div>

			</ul>
		</nav>
	</header>

</template>

<script>
export default {
	data() {
		return {
			navOpened: false,
		}
	},
	watch: {
		navOpened() {
			if (this.navOpened) {
				document.getElementsByTagName("body")[0].parentNode.style.overflowY = "hidden";
			} else {
				document.getElementsByTagName("body")[0].parentNode.style.overflowY = "scroll";
			}
		}
	}
}
</script>

<style scoped>
.logo {
	font-size: 2rem;
	color: var(--black);
	font-weight: normal;
}

.mobile-burger {
	padding: 1rem;
	background: none;
	border: none;
	cursor: pointer;
	z-index: 1010;
	height: 4rem;
	width: 4rem;
}

header {
	box-sizing: border-box;
	padding: 0.25rem var(--margin);
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

/* Mobile nav Containers */

.mobile-nav {
	background: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	width: 100%;
	gap: 1rem;
	font-size: 1.3rem;
	padding-left: var(--margin);

}

.mobile-nav-container {
	position: fixed;
	top: 0;
	left: 0;
	overflow: hidden;
	height: 100vh;
	width: 100vw;
	z-index: 1000;
}

/* Mobile Nav Links */

.mobile-nav > a:before, .mobile-nav > div > a:before {
	content: ">";
	padding-right: 1rem;
	font-weight: bold;
	display: inline-block; /* So text-decoration is not inherited from anchor */
}

.artists-list {
	display: flex;
	flex-direction: column;
	margin-left: 3rem;
	gap: 0.75rem;
	margin-top: 0.75rem;
}

.artists-list a {
	font-weight: normal;
}

.mobile-nav a {
	text-decoration: none;
	color: var(--black);
}

/* LINKS HOVER */
.mobile-nav > a:hover, .mobile-nav .artists-list a:hover {
	text-decoration: line-through;
	color: var(--accent);
}

.mobile-nav-container a:visited {
	color: var(--black);
}

/* MOBILE MENU ANIMATION */
.slide-enter-active,
.slide-leave-active {
	transition: all 0.15s ease-in;
}

.slide-enter-from,
.slide-leave-to {
	transform: translateX(100%);
}


/* dissolve ANIMATION */
.dissolve-leave-to {
	opacity: 0;
}

.dissolve-leave-active {
	transition: all 0.2s ease-out;
}

/* STOP SCROLLING */
.stop-scrolling {
	height: 100%;
	overflow: hidden;
}

/* DESKTOP */

.desktop {
	display: none;
}

.desktop-nav-container {
	width: 100%;
	margin-left: 3rem;
}

.desktop-nav {
	display: flex;
	list-style: none;
	justify-content: flex-end;
	width: 100%;
	gap: 0.5rem
}

.desktop-nav li {
	padding: 0.5rem;
}

.desktop-nav li a {
	color: var(--black);
}

/* ARTISTS */

.desktop-nav .artists-list-container {
	display: none;
	position: absolute;
	top: 3rem;
	z-index: 30;
	background: white;
}

.desktop-nav .artists-list {
	list-style: none;
	margin: 0;
	gap: 0;
}

.desktop-nav .artists-list li {
	padding: 0.5rem 0.5rem 0.5rem 0.5rem;
}

.desktop-nav .artists-list li:hover {
	background: var(--accent);
}

.desktop-nav .artists-list li:hover a {
	color: white;
}


/* HOVER */
.hovereable {
	cursor: pointer;
}

.hovereable:hover {
	background: var(--accent);
	color: white
}

/* Show "artists" section when hovered over itself or the button that giver access to it */
.hovereable:hover ~ .artists-list-container, .artists-list-container:hover {
	display: block;
}

@media (min-width: 750px) {
	.mobile {
		display: none;
	}

	.desktop {
		display: block;
	}
}
</style>