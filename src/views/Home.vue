<template>
	<main>
		<ArtCarousel class="art-carousel" :illustrations="illustrations"/>
		<p class="presentation">
			Somos un <span class="bold">grupo de artistas</span> residentes en Pamplona, y nuestro propósito es <span
			class="bold">renovar la escena artística</span> de esta cuidad.
		</p>
		<button class="button" @click="randomArtist()">¡Conócenos!</button>
		<Calendar class="cal"></Calendar>
	</main>
</template>

<script>
import ArtCarousel from '../components/ArtCarousel.vue';
import Calendar from "../components/Calendar.vue";

export default {
	components: {
		ArtCarousel,
		Calendar
	},
	data() {
		return {
			artistRoutes: [
				"/artistas/mikel-sarrias",
				"/artistas/evelin-virunurm",
				"/artistas/alonso-hogue",
				"/artistas/karen-yaniz",
				"/artistas/alexander-rozinov",
				"/artistas/andrea-gozalves",
			],
			illustrations: [
				{
					src: "illustrations/mikel/bicho.png",
					alt: "Bicho muy guay",
				},
				{
					src: "illustrations/evelin/rana.png",
					alt: "La rana del mundo, Evelin Virunurm",
				},
				{
					src: "illustrations/alonso/heart.png",
					alt: "Heart, Alonso Hogue",
				},
			]
		}
	},
	methods: {
		randomArtist() {
			this.$router.push(this.artistRoutes[Math.floor(Math.random() * this.artistRoutes.length)]);
		}
	}
}
</script>

<style scoped>

.art-carousel {
	max-width: 500px;
	margin: 2rem auto;
}

main {
	padding: 0 var(--margin);
	margin: auto;
}

.presentation {
	font-size: 1.25rem;
	text-align: center;
	margin: 1rem 0 3rem 0;
}

.button {
	font-size: 1.15rem;
	background: var(--black);
	color: white;
}

.button:hover {
	background: white;
	color: var(--black);
}

.cal {
	margin-top: 4rem;
}

@media (min-width: 600px) {
	.art-carousel {
		margin: 2rem auto;
	}

}

</style>