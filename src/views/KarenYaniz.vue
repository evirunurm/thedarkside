<template>
	<main>

		<section class="h-section">
			<div>
				<h1 class="font-lobster">Karen Yániz</h1>
				<h3>Ilustración I Acuarela I Fantasía</h3>
				<p>
					Me empezó a interesar el mundo de las artes y la ilustración ya en mi adolescencia, me llamaba mucho la
					atención la <span class="bold">representación de emociones y sentimientos por medio del arte</span>
					creando personajes y mundos
					fantásticos.
				</p>
			</div>
			<figure>
				<img class="h-image" src="../../public/illustrations/karen/karen_y_la_atraccion_2021.jpg"
					  alt="Dibujo de una calavera de un gato, con una polilla encima" width="400">
				<figcaption>
					Karen y la Atracción (2021)
				</figcaption>
			</figure>
		</section>
		<p>Gracias a esto comencé mis <span class="bold">estudios dedicados al arte</span> entrando en el <span
			class="bold">bachillerato
			artístico</span> de la Escuela de
			Artes de Pamplona. Acabé estos estudios mejorando mucho más mi técnica y puliendo mi estilo personal. Tras esto
			entré en un <span class="bold">grado superior de ilustración</span>, centrado en aquello que más me gustaba
			dentro del arte.
		</p>
		<ArtCarousel class="art-carousel-pajaros" :illustrations="carousel"></ArtCarousel>
		<p>
			Durante todo este tiempo aprendí mucho y me centré en las técnicas del <span class="bold">grafito, el uso del estilógrafo y la
			acuarela</span>, mi favorita, y en el mundo del <span class="bold">arte digital</span>. Sin embargo, siempre
			preferiré las <span class="bold">técnicas
			analógicas</span>
			por su <span class="bold">acabado manual, cálido y menos sintético.</span>
		</p>
		<figure>
			<img class="h-image puku" src="../../public/illustrations/karen/puku_2021.png"
				  alt="Puku (2021)" width="400">
			<figcaption>
				Puku (2021)
			</figcaption>
		</figure>
		<p>Como ilustradora exploro las <span class="bold">emociones, sentimientos y procesos mentales</span> de las
			personas, además de los míos
			propios, y <span class="bold">representarlos de una forma artística y fantástica creando originales y curiosos personajes.</span>
			Me
			apasiona mezclar las estéticas de lo <span class="bold">adorable</span> y lo <span class="bold">tétrico</span>
			creando
			diversas <span class="bold">criaturas, monstruos y seres para
				darles historias propias y mundos fantásticos en los que poder habitar.</span>
		</p>
		<p>
			Tengo un estilo acercado al sketch en cuanto a línea, tratando las manchas de color de forma difuminada para
			dar una sensación envolvente y etérea. Me centro especialmente en la técnica tradicional empleando la acuarela,
			siento qué así mis ilustraciones tienen más encanto y transmiten más calidez.
		</p>
		<figure>
			<img class="h-image ojos-cosmicos" src="../../public/illustrations/karen/ojos_cosmicos_2020.jpg"
				  alt="Ojos Cósmicos (2020)" width="400">
			<figcaption>
				Ojos Cósmicos (2020)
			</figcaption>
		</figure>
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
			carousel: [
				{
					src: "illustrations/karen/mujer_pajaro_1_2020.jpg",
					alt: "Mujer Pájaro 1 (2020)",
					caption: "Mujer Pájaro 1 (2020)",
				},
				{
					src: "illustrations/karen/mujer_pajaro_2_2020.jpg",
					alt: "Mujer Pájaro 2 (2020)",
					caption: "Mujer Pájaro 2 (2020)",
				},
				{
					src: "illustrations/karen/mujer_pajaro_3_2020.jpg",
					alt: "Mujer Pájaro 3 (2020)",
					caption: "Mujer Pájaro 3 (2020)",
				},
			]
		}
	}
}
</script>

<style scoped>
:root {
	--red: #660000;
}

main {
	padding: 0 var(--margin);
}

h1 {
	border: none;
	padding: 2rem 0 0 0;
	font-family: 'Lobster', cursive;
	font-size: 3rem;
	font-weight: normal;
}

h3 {
	font-family: 'Average', serif;
	margin-bottom: 3rem;
	font-size: 1.75rem;
	font-weight: normal;
}

h1, h3 {
	color: #660000;
}

p {
	font-family: 'Spectral', serif;
	line-height: 200%;
	padding: 0 0 1rem 0;
	font-size: 1.1rem;
}


.bold {
	font-weight: 700;
	font-family: 'Spectral', serif;
}

/* SECTIONS LAYOUT */

.h-section div {
	margin-bottom: 1rem;
}

.h-image {
	width: 100%;
}

/* IMAGES */
figure {
	margin-bottom: 1.5rem;
	display: grid;
	place-items: center;
}

figcaption {
	opacity: 0.75;
	font-size: 0.9rem;
	text-align: center;
}

.puku {
	max-width: 400px;
	margin: 2rem auto;
}

.ojos-cosmicos {
	max-width: 400px;
	transform: rotate(50deg);
	width: 60%;
	margin: 2rem auto;
}


/* ART CAROUSEL */

.art-carousel-pajaros {
	max-width: 300px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 2.5rem;
}

@media (min-width: 600px) {
	section.h-section {
		display: flex;
		flex-direction: row;
		gap: 5rem;
	}

	.h-section figure {
		width: 50%;
	}

	.h-section div {
		width: 100%;
	}
}

</style>