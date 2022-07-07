<template>
	<Header/>
	<RouterView class="main"/>
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

/* MAIN */

/*body {
	display: flex;
	flex-direction: column;
	align-items: center;
}*/

/* RESPONSIVE */

.main, header, footer {
	max-width: 1000px;
}

main, header, footer {
	margin: auto;
}

</style>
