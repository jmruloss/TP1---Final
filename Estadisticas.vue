<template>
  <div>
    <h1 class="text-h4 mb-5">Estadisticas</h1>
    <v-alert v-if="error" type="error">{{ error }}</v-alert>
    <v-row v-else>
      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4" color="primary">
          <div class="text-subtitle-1">Total de eventos</div>
          <div class="text-h4">{{ eventos.length }}</div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4">
          <div class="text-subtitle-1">Capacidad total</div>
          <div class="text-h4">{{ capacidadTotal.toLocaleString('es-AR') }}</div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4">
          <div class="text-subtitle-1">Asistencia registrada</div>
          <div class="text-h4">{{ asistenciaTotal.toLocaleString('es-AR') }}</div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4">
          <div class="text-subtitle-1">Ocupacion promedio</div>
          <div class="text-h4">{{ ocupacionPromedio }}%</div>
        </v-card>
      </v-col>
    </v-row>
    <h2 class="text-h5 mt-8 mb-3">Detalle por evento</h2>
    <v-table>
      <thead><tr><th>Evento</th><th>Capacidad</th><th>Asistencia</th><th>Ocupacion</th></tr></thead>
      <tbody>
        <tr v-for="evento in eventos" :key="evento._id">
          <td>{{ evento.name }}</td>
          <td>{{ evento.capacity }}</td>
          <td>{{ evento.assistance ?? evento.estimate ?? 0 }}</td>
          <td>{{ porcentaje(evento) }}%</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { obtenerEventos } from '../services/eventos'

const eventos = ref([])
const error = ref('')
const capacidadTotal = computed(() => eventos.value.reduce((total, e) => total + Number(e.capacity || 0), 0))
const asistenciaTotal = computed(() => eventos.value.reduce((total, e) => total + Number(e.assistance ?? e.estimate ?? 0), 0))
const ocupacionPromedio = computed(() => capacidadTotal.value
  ? (asistenciaTotal.value / capacidadTotal.value * 100).toFixed(2) : '0.00')

function porcentaje(evento) {
  const asistencia = Number(evento.assistance ?? evento.estimate ?? 0)
  return evento.capacity ? (asistencia / evento.capacity * 100).toFixed(2) : '0.00'
}
onMounted(async () => {
  try {
    const datos = await obtenerEventos()
    eventos.value = datos.events
  } catch {
    error.value = 'No se pudieron cargar las estadísticas.'
  }
})
</script>