<template>
	<main>
		<h1>Alonso Hogue</h1>
		<h3 class="title">Productor musical / Artista Visual</h3>
		<p></p>
		<p></p>
		<p></p>
		<p>
			
		</p>
		<figure class="blood-stream">
			<img src="../../public/illustrations/alonso/blood.png" alt="Horizontal stream of blood, 3D." height="300">
			<figcaption>(2022)</figcaption>
		</figure>
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

/* BLOOD IMAGE FIGURE*/
.blood-stream {
	width: 100%;
	overflow: hidden;
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