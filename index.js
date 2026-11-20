import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pasados from '../views/Pasados.vue'
import Proximos from '../views/Proximos.vue'
import Contacto from '../views/Contacto.vue'
import Estadisticas from '../views/Estadisticas.vue'
import DetalleEvento from '../views/DetalleEvento.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/pasados', component: Pasados },
  { path: '/proximos', component: Proximos },
  { path: '/contacto', component: Contacto },
  { path: '/estadisticas', component: Estadisticas },
  { path: '/evento/:id', component: DetalleEvento }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})