<template>
	<main>
		<h1>Alexander Rozinov</h1>
		<p class="warning">En proceso...</p>
	</main>
</template>

<style scoped>
main {
	padding: 0 var(--margin);
}


.h-section div {
	margin-bottom: 1rem;
}

figure {
	margin-bottom: 1.5rem;
}

.h-image {
	width: 100%;
}

figcaption {
	opacity: 0.75;
	font-size: 0.9rem;
	text-align: center;
}

p {
	padding: 0 0 1rem 0;
}

@media (min-width: 600px) {
	.h-section {
		display: flex;
		gap: 1rem;
	}

	.h-section figure {
		width: 45%;
	}

	.h-section div {
		width: 55%;
	}
}

.warning {
	margin: 2rem 0;
	text-align: center;
}
</style>