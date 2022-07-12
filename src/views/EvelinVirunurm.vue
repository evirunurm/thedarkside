<template>
	<main>
		<h1>Evelin Virunurm</h1>
		<h3 class="title">Ilustración | Pirograbado | Acuarela</h3>
		<section class="h-section">
			<div>
				<p>No soy de las personas que lleva dibujando toda su vida. Evidentemente siempre tuve ese hobbie por
					ahí, pero no me centré en eso hasta los <span class="bold">13 años</span>.</p>
				<p>Empecé a ver tutoriales,
					copiar fotos, personajes de series que me gustaban, etc. Seguí ese camino hasta terminar el <span
						class="bold">Bachillerato de Artes Gráficas</span>, posterior al cual, empecé el <span class="bold">CFGS de Ilustración</span>.
					A mediados
					de primero me di cuenta de que no quería perseguir una carrera laboral en el arte. Para mí, la
					ilustración había perdido su lado bonito, y se convirtió en una cosa más que debía hacer.</p>
				<p>
					Mis ilustraciones se podrían definir como más <span class="bold">gráficas</span> que poéticas.
					Normalmente no cuento historias, al menos no aposta. Simplemente trato de pulir al máximo la parte
					estética, y si naturalmente
					sale una <span class="bold">navarración soterrada</span>, perfecto.
				</p>

			</div>
			<figure>
				<img class="h-image" src="../../public/illustrations/evelin/cat_skull.PNG"
					  alt="Dibujo de una calavera de un gato, con una polilla encima" width="400">
				<figcaption>
					Cat skull (2020)
				</figcaption>
			</figure>
		</section>
		<p>
			Hasta hace nada mis dibujos se definian por el excesivo uso del negro, temática oscuro, paleta de
			colores fríos. Pero, en el último año, he estado explorando más el mundo del <span
			class="bold">color</span>, la acuarela y las texturas.
			algo más de lado el dibujo digital, que hasta ahora había sido predominante en mi arte.
		</p>
		<p>
			El <span
			class="bold">pirograbado</span> es una de las cosas que últimamente he explorado más: La quema
			sobre madera. El pirograbado requiere mucha preparación antes hacer una pieza: Hacer un diseño que se
			ajuste al tamaño de la madera, calcarlo sobre papel de cebolla, pasarlo a la madera con papel de
			carbón... Además de que la única manera de corregir un fallo es limando. Apesar de todo eso, es una de
			las maneras de hacer arte gráfico más <span class="bold">terapéutica</span> que he encontrado.
		</p>
		<p>
			Hasta hace nada, lo que más me <span class="bold">inspiraba</span> para crear eran otros artistas (<a
			target="_blank"
			href="https://www.faunwood.com/portfolio">Miranda
			Zimmerman</a>, <a target="_blank" href="https://www.instagram.com/behemot_crta_stvari/?hl=en">Behemot Crta
			Stvari</a>, <a target="_blank" href="https://www.artstation.com/aalmaluar">Aalma do Luar</a> y <a
			target="_blank"
			href="https://www.instagram.com/tiri.art/?hl=en">Tiri</a>), pero ahora me veo más inspirada por fotografías y
			el pasado. Gran parte de mis ilustraciones, aunque en un principio no
			trato de que representen nada, acaban contando algo sobre mi infancia.<br/>
			Y, claramente, las polillas y las setas son un gran recuerso que utilizo en mi arte🍄🦋.
		</p>
		<figure>
			<img class="h-image" src="../../public/illustrations/evelin/rana.png"
				  alt="Dibujo de una rana en acuarela, con setas encima y una planta creciendo de ella." width="400">
			<figcaption>
				La rana del mundo (2022)
			</figcaption>
		</figure>
	</main>
</template>

<script>

</script>

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
</style>