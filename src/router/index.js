import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/Home.vue'
import ExposicionView from '../views/Exposicion.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/exposicion',
			name: 'exposicion',
			component: ExposicionView
		},
		{
			path: '/artistas/mikel-sarrias',
			name: 'mikel-sarrias',
			component: () => import('../views/MikelSarrias.vue')
		},
		{
			path: '/artistas/evelin-virunurm',
			name: 'evelin-virunurm',
			component: () => import('../views/EvelinVirunurm.vue')
		},
		{
			path: '/artistas/alonso-hogue',
			name: 'alonso-hogue',
			component: () => import('../views/AlonsoHogue.vue')
		},
		{
			path: '/artistas/karen-yaniz',
			name: 'karen-yaniz',
			component: () => import('../views/KarenYaniz.vue')
		},
		{
			path: '/artistas/alexander-rozinov',
			name: 'alexander-rozinov',
			component: () => import('../views/AlexanderRozinov.vue')
		},
		{
			path: '/artistas/andrea-gozalves',
			name: 'andrea-gozalves',
			component: () => import('../views/AndreaGozalves.vue')
		},
		{
			path: '/:pathMatch(.*)*',
			component: () => import('../views/NotFound.vue')
		}
	]
})

export default router