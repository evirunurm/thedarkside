<template>
	<Header/>
	<RouterView/>
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
:root {
	--margin: 1.5rem;
	--accent: goldenrod;
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html {
	scroll-behavior: smooth !important; /* So hrefs to ids scroll smoothly. */
}

.button {
	padding: 0.75rem 2rem;
	background: none;
	border: 1px solid black;
	transition: 0.2s ease-in-out;
	margin: 0 auto;
	cursor: pointer;
	display: block;
}

.button:hover {
	background: black;
	border: 1px solid black;
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
	border-bottom: 1px solid black;
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


</style>
