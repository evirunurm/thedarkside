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
					<p>Participantes de 2020: </p>
					<ul>
						<li>Mikel Sarrias</li>
						<li>Evelin Virunurm</li>
						<li>Irene Hernández</li>
						<li>Nahia Jaso</li>
						<li>Gabriela Hernández</li>
					</ul>
				</div>
				<figure>
					<img class="h-image" src="../../public/photos/2020/cartel_2020.jpg"
						  alt="El cartel de la exposición de 2020."
						  width="500">
					<figcaption>
						El cartel usado en la exposición de 2020, con los nombres de los artistas y una ilustración
						representativa.
					</figcaption>
				</figure>
			</div>
			<ArtCarousel :illustrations="photosFirstEdition"/>
		</article>
		<article id="segunda-edicion">
			<h2>Segunda edición</h2>
			<div class="h-section">
				<div>
					<p>En 2021 volvimos a la acción con una segunda edición!</p>
					<p>Participantes de 2021: </p>
					<ul>
						<li>Mikel Sarrias</li>
						<li>Evelin Virunurm</li>
						<li>Nahia Jaso</li>
						<li>Alexander Rozinov</li>
						<li>Karen Yániz</li>
					</ul>
				</div>
				<figure>
					<img class="h-image" src="/public/photos/2021/cartel_2021.png" alt="">
				</figure>
			</div>

		</article>
		<article id="tercera-edicion">
			<h2>Tercera edición</h2>
			<p>En 2021 volvimos a la acción con una segunda edición!</p>

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
					src: "photos/2020/Expo2020.jpeg",
					alt: "Fotografía de la exposición de 2020.",
					caption: `Irene Hernández, Gabriela Hernández,
					<a href="/artistas/evelin-virunurm">Evelin Virunurm,</a>
					<a href="/artistas/mikel-sarrias"> Mikel Sarrias.</a>`
				}, {
					src: "photos/2020/mikel_2020.png",
					alt: "Ilustraciones de Mikel Sarrias.",
					caption: `Ilustraciones de
					<a href="/artistas/mikel-sarrias"> Mikel Sarrias.</a>`
				}, {
					src: "photos/2020/evelin_2020.png",
					alt: "Ilustraciones de Evelin Virunurm.",
					caption: `Ilustraciones de
					<a href="/artistas/evelin-virunurm">Evelin Virunurm.</a>`
				}, {
					src: "photos/2020/gabriela_2020.png",
					alt: "Ilustraciones de Gabriela Hernández.",
					caption: `Ilustraciones de
					Gabriela Hernández.`
				}, {
					src: "photos/2020/irene_2020.png",
					alt: "Ilustraciones de Irene Hernández.",
					caption: `Ilustraciones de
					Irene Hernández.`
				}, {
					src: "photos/2020/nahia_2020.png",
					alt: "Ilustraciones de Nahia Jaso.",
					caption: `Ilustraciones de
					Nahia Jaso.`
				},
			],
			photosSecondEdition: [
				{
					src: "photos/2020/Expo2020.jpeg",
					alt: "Fotografía de la exposición de 2020.",
					caption: `Irene Hernández, Gabriela Hernández,
					<a href="/artistas/evelin-virunurm">Evelin Virunurm,</a>
					<a href="/artistas/mikel-sarrias"> Mikel Sarrias.</a>`
				}, {
					src: "photos/2020/mikel_2020.png",
					alt: "Ilustraciones de Mikel Sarrias.",
					caption: `Ilustraciones de
					<a href="/artistas/mikel-sarrias"> Mikel Sarrias.</a>`
				}, {
					src: "photos/2020/evelin_2020.png",
					alt: "Ilustraciones de Evelin Virunurm.",
					caption: `Ilustraciones de
					<a href="/artistas/evelin-virunurm">Evelin Virunurm.</a>`
				}, {
					src: "photos/2020/gabriela_2020.png",
					alt: "Ilustraciones de Gabriela Hernández.",
					caption: `Ilustraciones de
					Gabriela Hernández.`
				}, {
					src: "photos/2020/irene_2020.png",
					alt: "Ilustraciones de Irene Hernández.",
					caption: `Ilustraciones de
					Irene Hernández.`
				}, {
					src: "photos/2020/nahia_2020.png",
					alt: "Ilustraciones de Nahia Jaso.",
					caption: `Ilustraciones de
					Nahia Jaso.`
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
ul {
	margin: 0 var(--margin);
	display: flex;
	flex-direction: column;
	gap: 0.50rem;
	list-style: none;
}

ul li:before {
	content: ">";
	margin-right: 1rem;
	font-weight: bold;
	color: black;
	display: inline-block; /* So text-decoration is not inherited from anchor */
}


/* H SECTION */

.h-section div {
	margin-bottom: 1rem;
}

@media (min-width: 600px) {
	.h-section {
		display: flex;
		gap: 1rem;
	}

	.h-section > figure {
		max-width: 300px;
	}
}

</style>