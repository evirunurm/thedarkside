<template>
	<section class="carousel">
		<button class="button button-before" @click="rotate(false)">
			<svg width="19" height="35" viewBox="0 0 19 35" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M17 2L2 17.5L17 33" stroke="var(--black)" stroke-width="4" stroke-linecap="round"
						stroke-linejoin="round"/>
			</svg>
		</button>
		<div class="imgs-container">
			<div class="imgs-box" ref="imgsBox">
				<div class="img-box" v-for="illustration in illustrations">
					<figure>
						<img :src="'/' + illustration.src" :alt="illustration.alt" class="illustration"
							  :title="illustration.alt">
						<figcaption v-html="illustration.caption" class="figcaption">
						</figcaption>
					</figure>
				</div>
			</div>
		</div>
		<button class="button button-after" @click="rotate(true)">
			<svg width="19" height="35" viewBox="0 0 19 35" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2 2L17 17.5L2 33" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</button>
		<div class="info">
			<p>{{ selectedIllustration + 1 + ' / ' + illustrations.length }}</p>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		illustrations: Array,
	},
	data() {
		return {
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
			this.$refs.imgsBox.style.left = `-${100 * this.selectedIllustration}%`
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
	object-fit: scale-down;
}

.img-box {
	margin: 0;
	min-width: 100%;
	display: flex;
	align-items: center;
}

.imgs-box {
	display: flex;
	position: relative;
	left: 0;
	transition: 0.5s;
	height: 100%;
}

.imgs-container {
	width: 100%;
	overflow: hidden;
}

.img-box figure {
	text-align: center;
}

/* buttons */
.button {
	background: none;
	padding: 1rem;
	position: absolute;
	z-index: 10;
	transform: translateY(-50%);
	top: calc(50% - 1.9rem);
	border: none;
	cursor: pointer;
	height: calc(100% - 1.9rem * 2);
}

.button:hover {
	background: rgba(255, 255, 255, 0.25);
}

.button svg {
	height: 2rem;
}

.button path {
	opacity: 0.5;
	transition: 0.25s ease-in-out;
}

.button:hover path {
	opacity: 1;
}

.button.button-after {
	right: 0;
}

/* FIGURE */

figcaption {
	opacity: 0.75;
	font-size: 0.9rem;
	text-align: center;
}

figure {
	margin-bottom: 1.9rem;
}

/* INFO */
.info {
	position: absolute;
	bottom: 0;
	font-size: 0.85rem;
	padding: 0.25rem 1rem;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 100px;
	display: grid;
	place-items: center;
	background: rgba(0, 0, 0, 0.06);
}

</style>