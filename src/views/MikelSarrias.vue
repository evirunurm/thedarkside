<template>
	<main>
		<h1>Mikel Sarrias</h1>
		<h3 class="title">Ilustrador</h3>
		<p>
			Siempre he sentido una gran afición por los cómics y la ilustración en general pero no fue hasta que me metí en
			el <span class="bold">Grado Superior de la Escuela de Artes y Superior de Diseño de Pamplona</span> que empecé
			a enfocarme en ello de
			una manera más seria.
		</p>
		<p>
			Desde siempre he preferido ilustrar criaturas monstruosas, armaduras, cascos, máscaras, robots y generalmente
			todo lo que tuviera cierto carácter <span class="bold">bélico</span>, pero a pesar de eso en la actualidad me e
			empezado a centrar en
			dibujar a personas, pero lo que hago por lo general es <span class="bold">deshumanizarlos</span> con el uso del
			claroscuro, reduciendo
			en gran parte la expresividad del personaje y evitando así empatizar con la figura como si de una máscara se
			tratara.
		</p>
		<p>
			Uno de los puntos que más característiza mis ilustraciones serían el estilo que puede variar hacia un lado algo
			más <span class="bold">cartoon</span> y simple o otro más similar al <span class="bold">cómic</span> y con un
			mayor nivel de detalle, pero en general ambos tienen
			un nivel de iconicidad bajo, apesar de todo tambien me gusta variar de estilos.
		</p>
		<p>
			Tanto el trazo como el uso del color también serían dos puntos a destacar, puesto que uso un <span
			class="bold">trazo muy
			definido</span>, y en general limpio además de que denota mucha expresividad.
			En cuanto al color, mi <span class="bold">paleta principal es bastante reducida</span>, esencialmente se
			compone de negro, rojo y blanco.
			Aunque a pesar de ello también trabajó con una variedad cromática más amplia pero la gran mayoría de veces
			usando <span class="bold">colores planos</span>.
		</p>
		<p>
			Mis principales fuentes de inspiración y una de las cosas que más me motiva a la hora de ilustrar es la
			<span class="bold">mitología</span>, tengo interés en todas pero de las que más conocimiento tengo serían de la
			<span class="bold">griega, nórdica y
				japonesa</span>. También la <span class="bold">historia</span> en general me resulta muy interesante puesto
			que una de las cosas que más me gusta representar son escenas bélicas, o relacionadas con ese tipo de temas.
			<br/>
			<span class="bold">El cine</span> también me ha marcado mucho a la hora de ilustrar, mostrándome la importancia
			de la iluminación, la composición de la imagen y el uso del color para representar significados concretos.

		</p>
	</main>


</template>

<style scoped>
main {
	padding: 0 var(--margin) var(--margin) var(--margin);
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

.warning {
	margin: 2rem 0;
	text-align: center;
}
</style>