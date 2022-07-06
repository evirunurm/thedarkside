<template>
	<main>
		<ArtCarousel :illustrations="illustrations"/>
		<p class="presentation">
			Somos un <span class="bold">grupo de artistas</span> residentes en Pamplona, y nuestro propósito es <span
			class="bold">renovar la escena artística</span> de esta cuidad.
		</p>
		<button class="button" @click="randomArtist()">¡Conócenos!</button>

	</main>
</template>

<script>
import ArtCarousel from '../components/ArtCarousel.vue';


export default {
	components: {
		ArtCarousel,

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
					src: "illustrations/ms_bicho.png",
					alt: "Bicho muy guay",
				},
				{
					src: "illustrations/ev_rana.png",
					alt: "La rana del mundo",
					caption: "Muy guay"
				},
				{
					src: "illustrations/ms_bicho.png",
					alt: "Bicho muy guay",
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

main {
	margin: 0 var(--margin);
}

.presentation {
	font-size: 1.25rem;
	text-align: center;
	margin: 1rem 0 3rem 0;
}

</style>