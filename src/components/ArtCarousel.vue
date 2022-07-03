<template>
	<section class="carousel">
		<button class="button button-before" @click="rotate(false)">Before</button>
		<div class="imgs-container">
			<div class="imgs-box" ref="imgsBox">
				<figure class="img-box" v-for="illustration in illustrations">
					<img :src="'public/illustrations/' + illustration.src" :alt="illustration.alt" class="illustration">
					<figcaption class="illustration-caption">
						{{ illustration.alt + ', por ' + illustration.artist + '.' }}
					</figcaption>
				</figure>
			</div>
		</div>
		<button class="button button-after" @click="rotate(true)">After</button>
	</section>
</template>

<script>
export default {
	data() {
		return {
			illustrations: [
				{
					artist: "Mikel Sarrias",
					src: "ms_bicho.png",
					alt: "Bicho muy guay",
				},
				{
					artist: "Evelin Virunurm",
					src: "ev_rana.png",
					alt: "La rana del mundo",
				},
				{
					artist: "Mikel Sarrias",
					src: "ms_bicho.png",
					alt: "Bicho muy guay",
				},
			],
			selectedIllustration: 0,
		}
	},
	methods: {
		rotate(forth) {
			if (forth) {
				if (this.selectedIllustration < this.illustrations.length - 1) {
					this.selectedIllustration++;
				} else {
					this.selectedIllustration = 0;
				}
			} else {
				if (this.selectedIllustration > 0) {
					this.selectedIllustration--;
				} else {
					this.selectedIllustration = this.illustrations.length - 1;
				}
			}
			this.updateCarousel();
		},
		updateCarousel() {
			this.$refs.imgsBox.style.left = `-${ 100 * this.selectedIllustration }%`
		}
	}
}
</script>

<style scoped>

.carousel {
	position: relative; /* To position buttons */
}

.illustration {
	width: 100%;
}

.illustration-caption {
	text-align: right;
}

.img-box {
	margin: 0;
	min-width: 100%;
}

.imgs-box {
	display: flex;
	position: relative;
	left: 0;
	transition: 0.5s ease-out;
	background: red;
}

.imgs-container {
	width: 100%;
	overflow: hidden;
}

/* buttons */
.button {
	position: absolute;
	z-index: 10;
	transform: translateY(-50%);
	top: 50%;
	height: 3rem;
	width: 2rem;
}

</style>