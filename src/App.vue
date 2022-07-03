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

body {
	margin: 0;
}

</style>
