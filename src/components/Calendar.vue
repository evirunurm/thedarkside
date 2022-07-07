<template>
	<article class="calendar-container">
		<p class="month">Agosto</p>
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
			<li v-for="(index, day) in 31"
				 :class="[today.getDate() === index && today.getMonth() === 7 ? 'today': '']"
				 @click="selectedDay = index"
			>
				{{ index }}
			</li>
		</ul>
		<transition name="fade">
			<div v-show="selectedDay" class="event-container">
				<p>{{ selectedDay }} de Agosto</p>
				<p>
					{{
						weeks.find(day => day.day === selectedDay) ? weeks.find(day => day.day === selectedDay).name : 'No se han encontrado eventos.'
					}}
				</p>
				<button @click="selectedDay=null">Cerrar</button>
			</div>
		</transition>
	</article>
</template>

<script>
export default {
	data() {
		return {
			today: new Date(),
			weeks: [
				{
					name: "Inauguración",
					day: 5,
					importance: 1
				}
			],
			selectedDay: null,

		}
	},
	methods: {},
}
</script>

<style scoped>
.calendar-container {
	border-top: 1px solid black;
	margin: 2.5rem 0;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

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

.days .start {
	font-weight: bold;
}

.today {
	background: var(--accent);
	color: white;
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
	width: 50vw;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	box-shadow: 8px 8px 20px rgba(14, 12, 66, 0.25);
	border: 1px solid black;
}
</style>
