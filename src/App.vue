<template>
	<Header/>
	<RouterView/>
	<Footer />
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
*, *::before, *::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

button {
	padding: 0.75rem 2rem;
	background: none;
	border: 1px solid black;
	transition: 0.2s ease-in-out;
	margin: 0 auto;
	cursor: pointer;
	display: block;
}

button:hover {
	background: black;
	border: 1px solid black;
	color: white
}

.bold {
	font-weight: bold;
}

</style>
