<template>
	<main>
		<h1>Alonso Hogue</h1>
		<h3 class="title">Productor musical / Artista Visual</h3>
		<p>Hola, soy Alonso, y tengo un grán interés por todo tipo de expresión estética.
			Desde pequeño siempre me ha gustado crear cosas, a los 11 empezé a montar
			pequeños cortos de “stopmotion” con recortes de papel. En unos años migré al
			entorno digital, editando mis primeros videos para youtube.</p>
		<p>A su vez, siempre hetenido una gran fascinación por la música. A los 16 empecé a
			escribir mis primeras canciones , y con los años (Tengo21) estas se han convertido
			en mi pasión principal y en el nucleo de mi produccion artística, justo con la musica produzco videos
			compuestos por una mezcla de animación, modelaje 3D, y
			técnicas de diseño gráfico.</p>
		<p>Los diseños que estoy exponiendo son apturas y variaciones del arte que
			produzco para mis canciones, si estás intersad@ en ver mas, haz click <a href="https://colorless.netlify.app/">aquí</a>.
		</p>
		<p>
			Actualmente soy estudiante de Animación y VFX en Creanavarra, y anteriormente
			hice un bachillerato artístico en la Escuela de Arte y Superior De Diseño de Pamplona.
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