<template>
	<main>
		<h1>Exposiciones</h1>
		<article>
			<ul class="index">
				<li><a href="#primera-edicion">Primera Edición</a></li>
				<li><a href="#segunda-edicion">Segunda Edición</a></li>
				<li><a href="#tercera-edicion">Tercera Edición</a></li>
				<li><a href="#FAQ">Preguntas frecuentes</a></li>
			</ul>
		</article>
		<article id="primera-edicion">
			<h2>Primera edición</h2>
			<div class="h-section">
				<div>
					<p>En agosto de 2020, tuvimos la oportunidad de hacer <span
						class="bold">nuestra primera exposición</span>.
						Como todos teníamos una relación con la <a
							href="" class="bold">Escuela de Arte y Superior de Diseño de Pamplona</a> (sea por haber
						sido alumnos o plantearse estudiar ahí) decidimos basarla en eso.</p>
					<p>Usamos ilustraciones que teníamos <span class="bold">acumuladas a lo largo de los años</span>: Dibujos
						viejos, trabajos de Bachillerato, de la ESO... Y para colgarlos no tuvimos otra que usar la vieja
						confiable: Corchos.</p>
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
					<img class="h-image" src="photos/2020/cartel_2020.jpg"
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
					<p>Desafortunadamente, Irene y Gabriela Hernández dejaron la exposición, pero dimos la bienvenida a
						<router-link to="/artistas/alexander-rozinov">Alex
							Rozinov
						</router-link>
						y
						<router-link to="/artistas/karen-yaniz">Karen Yániz</router-link>
						.
					</p>
					<p>Con ellos se <span
						class="bold">diversificó</span> el tipo de arte que exponíamos, ya que Alex produce su propia <span
						class="bold">música</span> y trajo
						muestras de su album.</p>
					<p>Mantuvimos la idea de los corchos (principalmente por comodidad), pero les pusimos un borde
						negro. Además, el arte que llevamos era más específico para la exposición.</p>
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
					<img class="h-image" src="photos/2021/cartel_2021.png" alt="">
					<figcaption>
						El cartel usado en la exposición de 2021, con los nombres de los artistas y una ilustración
						representativa.
					</figcaption>
				</figure>

			</div>
			<ArtCarousel :illustrations="photosSecondEdition"/>
		</article>
		<article id="tercera-edicion">
			<h2>Tercera edición</h2>
			<p>Este año 2022 tenemos una <span class="bold">tercera edición</span> en progreso.</p>
			<p>Nahia Jaso este año no ha podido unirse, pero hemos dado la bienvenida a
				<router-link to="/artistas/alonso-hogue">Alonso Hogue</router-link>
				y a
				<router-link to="">Andrea Gozalves!</router-link>
			</p>
		</article>
		<article id="FAQ">
			<h2>Preguntas frecuentes</h2>
			<section>
				<details>
					<summary>¿<span class="bold">Dónde</span> se hace la exposicón?</summary>
					<div class="h-section">
						<p>En <a href="https://espaciosmedialuna.com/">Espacios Media Luna</a>, Calle Baja Navarra 34-36,
							Pamplona. Cerca de la Plaza de las Merindades.</p>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.8122191736666!2d-1.636921184001218!3d42.813454079159165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5093007e095555%3A0x4699b9aee670c2a8!2sEspacios%20Medialuna!5e0!3m2!1ses!2ses!4v1657234478340!5m2!1ses!2ses"
							width="400" height="300" style="border:0;" loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>

				</details>
				<details>
					<summary>¿La entrada <span class="bold">cuesta dinero?</span></summary>
					<p>No, la entrada a la exposición es <span class="bold">gratuita</span>. Para entrar solo hay que tocar
						el timbre, pero normalmente
						estamos atentos a la puerta para abrir antes.</p>
				</details>
				<details>
					<summary>Si me gusta algo de lo exponeis, ¿puedo <span class="bold">comprarlo</span>?</summary>
					<p>La mayor parte de las cosas que exponemos están a la venta, ¡asi que <span class="bold">sí</span>!
						<br/>En caso de que algo se venda, ponemos los precios directamente en frente de la obra. Pero si
						tienes alguna duda, siempre habrá alguno de nosotros para resolverla.</p>
				</details>
			</section>

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
					src: "photos/2021/alex_2021.png",
					alt: "Ilustraciones de Alexander Rozinov.",
					caption: `Arte de
					<a href="/artistas/alexander-rozinov">Alexander Rozinov</a>.`
				}, {
					src: "photos/2021/karen_2021.png",
					alt: "Ilustraciones de Karen Yániz.",
					caption: `Ilustraciones de
					<a href="/artistas/karen-yaniz">Karen Yániz</a>.`
				}, {
					src: "photos/2021/mikel_2021.png",
					alt: "Ilustraciones de Mikel Sarrias.",
					caption: `Ilustraciones de
					<a href="/artistas/mikel-sarrias"> Mikel Sarrias</a>.`
				}, {
					src: "photos/2021/evelin_2021.png",
					alt: "Ilustraciones de Evelin Virunurm.",
					caption: `Ilustraciones de
					<a href="/artistas/evelin-virunurm">Evelin Virunurm</a>.`
				}, {
					src: "photos/2021/nahia_2021.png",
					alt: "Ilustraciones de Nahia Jaso.",
					caption: `Ilustraciones de
					Nahia Jaso.`
				},
			],
		}
	}
}

</script>

<style scoped>
main {
	padding: 0 var(--margin);
	margin: auto;
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
	color: var(--black);
	display: inline-block; /* So text-decoration is not inherited from anchor */
}

/* H SECTION */

.h-section div {
	margin-bottom: 1rem;
}

/* FAQ */
summary {
	cursor: pointer;
}

summary:hover {
	text-decoration: line-through;
}

details[open] summary ~ * {
	animation: sweep .5s ease-in-out;
}

@keyframes sweep {
	0% {
		opacity: 0;
		transform: translateX(-10px)
	}
	100% {
		opacity: 1;
		transform: translateX(0)
	}
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

	article {
		margin-bottom: 3rem;
	}

	h2, h1 {
		margin-bottom: 2rem;
	}

}

</style>