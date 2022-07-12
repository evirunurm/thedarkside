<template>
	<article class="calendar-container">
		<p class="month">Agosto</p>
		<div class="calendar">
			<ul class="weekdays">
				<li>L</li>
				<li>M</li>
				<li>X</li>
				<li>J</li>
				<li>V</li>
				<li>S</li>
				<li>D</li>
			</ul>
			<ul ref="days" class="days">
				<li v-for="index in 31"
					 :class="[today.getDate() === index && today.getMonth() === 7 ? 'today': '', events.find(d => d.day === index) ? 'event' : '']"
					 @click="selectedDay = index">
					{{ index }}
				</li>
			</ul>
		</div>

		<transition name="fade">
			<div v-show="selectedDay" class="event-container">
				<p class="bold event-date">{{ selectedDay }} de
					Agosto{{ today.getDate() === selectedDay && today.getMonth() === 7 ? ' / Hoy' : '' }}</p>
				<p v-if="events.find(d => d.day === selectedDay)" class="event-time">
					Abierto: <br/>🕒 {{ events.find(d => d.day === selectedDay).time }}
				</p>
				<p v-html="events.find(d => d.day === selectedDay) ?
							events.find(d => d.day === selectedDay).name :
							'No se han encontrado eventos.'"></p>
				<button class="button" @click="selectedDay=null">Cerrar</button>
			</div>
		</transition>
	</article>
</template>

<script>
export default {
	data() {
		return {
			today: new Date(),
			events: [
				{
					name: "Inauguración de la Exposición.",
					day: 5,
					time: "18:00 - 20:00"
				}, {
					name: "Último día de la Exposición",
					day: 31,
					time: "18:00 - 20:00"
				},
			],
			selectedDay: null,

		}
	},
	methods: {},
}
</script>

<style scoped>
.calendar-container {
	border-top: 1px solid var(--black);
	margin: 2.5rem 0;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 100%;
}

/* DAYS */

.days {
	list-style: none;
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 0.5rem;
}

.days li {
	display: grid;
	place-items: center;
	padding: 0.25rem;
	cursor: pointer;
}

.days li:hover {
	background: rgba(0, 0, 0, 1);
	color: white;
}

/* Styles for event days. Applied dynamically. */
.days .event {
	font-weight: bold;
	color: white;
	background: var(--accent);
	opacity: 0.75;
}


/* Styles for today's date. Applied dynamically. */
.today {
	background: var(--green);
	font-weight: bold;
}

/* WEEKDAYS */

.weekdays {
	display: flex;
	list-style: none;
	justify-content: space-around;
	color: var(--accent);
}

.weekdays li {
	padding: 0.25rem;
	font-weight: bold;
	display: grid;
	place-items: center;
}

/* MONTH */

.month {
	text-align: center;
	font-size: 1.45rem;
	font-weight: bold;
	padding: 0.9rem 0;
}

/* EVENT DIALOG */

.event-container {
	background: white;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 70vw;
	max-width: 500px;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	box-shadow: 8px 8px 20px rgba(14, 12, 66, 0.25);
	border: 1px solid var(--black);
}

.event-container button {
	margin-right: 0;
	margin-top: 0.75rem;
	padding: 0.25rem 0.75rem;
}

.event-date {
	border-bottom: 1px solid var(--black);
	padding: 0 0 0.5rem 0;
	margin-bottom: 0.5rem;
}

/* RESPONSIVENESS */
.calendar {
	display: flex;
	flex-direction: column;
}

/* FADE ANIMATION */
.fade-enter-from {
	opacity: 0;
}

.fade-enter-active {
	transition: all 0.25s ease-out;
}

.fade-leave-to {
	opacity: 0;
}


@media (min-width: 500px) {
	.calendar {
		width: 500px;
		align-self: center;
	}
}


</style>
