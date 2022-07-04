<template>
	<main>
		<h1>Exposiciones</h1>
		<article>
			<ul class="index">
				<li><a href="#primera-edicion">Primera Edición</a></li>
				<li><a href="#segunda-edicion">Segunda Edición</a></li>
				<li><a href="#tercera-edicion">Tercera Edición</a></li>
			</ul>
		</article>
		<article id="primera-edicion">
			<h2>Primera edición</h2>
			<div class="h-section">
				<div>
					<p>Usamos ilustraciones que teníamos <span class="bold">acumuladas a lo largo de los años</span>: Dibujos
						viejos, trabajos de Bachillerato, de la ESO... Y para colgarlos no tuvimos otra que usar la vieja
						confiable: Corchos.</p>
					<p>En agosto de 2020, tuvimos la oportunidad de hacer <span
						class="bold">nuestra primera exposición</span>.
						Como todos teníamos una relación con la <a
							href="" class="bold">Escuela de Arte y Superior de Diseño de Pamplona</a> (sea por haber
						sido alumnos o plantearse estudiar ahí) decidimos basarla en eso.</p>
				</div>

				<figure>
					<img class="h-image" src="../assets/photos/Expo2020cartel.jpg" alt="El cartel de la exposición de 2020."
						  width="500">
					<figcaption>
						El cartel usado en la exposición de 2020, con los nombres de los artistas y una ilustración
						representativa.
					</figcaption>
				</figure>
			</div>
			<figure>
				<img class="h-image" src="../assets/photos/Expo2020.jpeg"
					  alt="Fotografía de parte de los artistas de la exposición." width="500">
				<figcaption>Irene Hernández, Gabriela Hernández,
					<router-link to="/artistas/evelin-virunurm">Evelin Virunurm,</router-link>
					<router-link to="/artistas/mikel-sarrias"> Mikel Sarrias.</router-link>
					(Exposición de 2020)
				</figcaption>
			</figure>

			<ArtCarousel/>
		</article>
		<article id="segunda-edicion">
			<h2>Segunda edición</h2>
			<p>En 2021, volvimos a la acción con una segunda edición! Aunque, desafortunadamente,
			</p>
			<p>Para colgarlos no tuvimos otra que usar la vieja confiable: Corchos.</p>
		</article>
	</main>

</template>

<script>
import ArtCarousel from "../components/ArtCarousel.vue";

export default {
	components: {
		ArtCarousel
	},
	data() {
		return {
			photosFirstEdition: [
				{
					artist: "Mikel Sarrias",
					src: "ms_bicho.png",
					alt: "Bicho muy guay",
				},
			]
		}
	}
}

</script>

<style scoped>
main {
	margin: 0 var(--margin);
}

p {
	margin-bottom: 1rem;
}

article {
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

a {
	color: var(--accent);
	text-decoration: none;
	font-weight: bold;
}

a:hover {
	text-decoration: line-through;
}

figure {
	margin-bottom: 1.5rem;
}

/* INDEX */
.index {
	margin: 0 var(--margin);
	display: flex;
	flex-direction: column;
	gap: 0.50rem;
	list-style: none;
}

.index a:before {
	content: ">";
	margin-right: 1rem;
	font-weight: bold;
	color: black;
	display: inline-block; /* So text-decoration is not inherited from anchor */
}

@media (min-width: 600px) {
	.h-section {
		display: flex;
	}

	.h-section > figure {
		max-width: 300px;
	}
}

</style>