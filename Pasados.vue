<template>
  <div>
    <h1 class="text-h4 mb-5">Eventos pasados</h1>
    <v-text-field v-model="busqueda" label="Buscar evento" clearable variant="outlined"></v-text-field>
    <v-row>
      <v-col v-for="evento in filtrados" :key="evento._id" cols="12" sm="6" md="4">
        <TarjetaEvento :evento="evento" />
      </v-col>
    </v-row>
    <p v-if="filtrados.length === 0">No hay eventos pasados que coincidan con la busqueda.</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { obtenerEventos } from '../services/eventos'
import TarjetaEvento from '../components/TarjetaEvento.vue'

const eventos = ref([])
const busqueda = ref('')
const filtrados = computed(() => eventos.value.filter(e =>
  new Date(e.date + 'T00:00:00') < new Date(new Date().toDateString()) &&
  e.name.toLowerCase().includes((busqueda.value || '').toLowerCase())
))
onMounted(async () => {
  try {
    const datos = await obtenerEventos()
    eventos.value = datos.events
  } catch (error) {
    console.error('Error al cargar eventos:', error)
  }
})
</script>