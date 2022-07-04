<template>
	<section class="carousel">
		<button class="button button-before" @click="rotate(false)">
			<svg width="19" height="35" viewBox="0 0 19 35" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M17 2L2 17.5L17 33" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
		<div class="imgs-container">
			<div class="imgs-box" ref="imgsBox">
				<div class="img-box" v-for="illustration in illustrations">
					<img :src="'public/illustrations/' + illustration.src" :alt="illustration.alt" class="illustration" :title="illustration.alt + ', por ' + illustration.artist + '.'">
				</div>
			</div>
		</div>
		<button class="button button-after" @click="rotate(true)">
			<svg width="19" height="35" viewBox="0 0 19 35" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2 2L17 17.5L2 33" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
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
	height: 100%;
	object-fit: contain;
}

.img-box {
	margin: 0;
	min-width: 100%;
	padding: 2rem;
}


.imgs-box {
	display: flex;
	position: relative;
	left: 0;
	transition: 0.5s ;
	height: 100%;
}

.imgs-container {
	width: 100%;
	overflow: hidden;
}

/* buttons */
.button {
	background: none;
	padding: 1rem;
	position: absolute;
	z-index: 10;
	transform: translateY(-50%);
	top: 50%;
	border: none;
	cursor: pointer;
}

.button path{
	opacity: 0.5;
	transition: 0.25s ease-in-out;
}

.button:hover path{
	opacity: 1;
}

.button.button-after {
	right: 0;
}

</style>