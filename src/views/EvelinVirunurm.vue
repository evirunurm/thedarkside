<template>
	<main>
		<h1>Evelin Virunurm</h1>
		<h3 class="title">Ilustración | Pirograbado | Acuarela</h3>
		<div class="h-section">
			<div>
				<p>
					- Más gráfico que poético. Normalemnte no cuento historias, al menos no aposta. Pero siempre acaba
					saliendo una narración. Como si tuviese vida.
					- Mi dibujo siempre se definia por la falta de color, pero últimamente exploro más el mundo del color:
					Acuarela.
					- Pirograbado: quemar dibujos. Similar al tatuaje. Más accesible, seguro. Terapéutico.
					- Empecé a estudiar CFGS de Ilustración, pero no quería perseguir una carrera laboral en el arte: Pierde
					su lado terapéutico.
					- Inspiración: Pasado/Infancia, otros artistas (ejemplos), Fotografías personales, las polillas y setas,
				</p>
			</div>
			<figure>
				<img class="h-image" src="/illustrations/evelin/rana.png" alt="" width="400">
				<figcaption>
					La rana del mundo, devoradora de continentes.
				</figcaption>
			</figure>
		</div>
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