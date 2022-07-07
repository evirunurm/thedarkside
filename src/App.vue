<template>
	<Header/>
	<RouterView v-slot="{ Component }" class="main">
		<transition name="route" mode="out-in">
			<component :is="Component"></component>
		</transition>
	</RouterView>
	<Footer/>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
	components: {
		Header,
		Footer,
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

:root {
	--margin: 1.5rem;
	--accent: rgba(218, 165, 32, 0.6);
	--green: rgba(11, 184, 86, 0.2);
	--black: rgba(25, 25, 25, 1);
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: 'Poppins', sans-serif;
}

html {
	scroll-behavior: smooth !important; /* So hrefs to ids scroll smoothly. */
}

body {
	color: var(--black);
}

.button {
	padding: 0.75rem 2rem;
	background: none;
	border: 1px solid var(--black);
	transition: 0.2s ease-in-out;
	margin: 0 auto;
	cursor: pointer;
	display: block;
}

.button:hover {
	background: var(--black);
	border: 1px solid var(--black);
	color: white
}

.bold {
	font-weight: bold;
}

h1 {
	font-size: 1.75rem;
}

h1, h2 {
	width: 100%;
	border-bottom: 1px solid var(--black);
	padding-bottom: 0.75rem;
	margin-bottom: 0.75rem;
}

/* LINKS */

a {
	color: var(--accent);
	text-decoration: none;
	font-weight: bold;
}

a:hover {
	text-decoration: line-through;
}

/* MAIN */

/*body {
	display: flex;
	flex-direction: column;
	align-items: center;
}*/

/* RESPONSIVE */

.main, header {
	max-width: 1000px;
}

main, header {
	margin: auto;
}

/* ROUTE ANIMATION */

/* Route transitions */
.route-enter-from {
	opacity: 0;
}

.route-enter-active {
	transition: all 0.5s ease-out;
}

.route-leave-to {
	opacity: 0;
}

/* ARTISTS PAGES GENERAL STYLING */
.title {
	opacity: 0.5;
	font-weight: normal;
	padding: 0 0 1rem 0;
}


</style>
