<template>
  <div>
    <v-btn to="/" variant="text" prepend-icon="mdi-arrow-left" class="mb-4">Volver a eventos</v-btn>
    <v-alert v-if="error" type="error">{{ error }}</v-alert>
    <v-card v-else-if="evento">
      <v-img :src="evento.image" height="320" cover :alt="evento.name"></v-img>
      <v-card-title class="text-h4">{{ evento.name }}</v-card-title>
      <v-card-subtitle>{{ evento.date }} · {{ evento.category }}</v-card-subtitle>
      <v-card-text>
        <p>{{ evento.descriptionxx || evento.description }}</p>
        <p class="mt-3"><strong>Lugar:</strong> {{ evento.place }}</p>
        <p><strong>Capacidad:</strong> {{ evento.capacity }}</p>
        <p><strong>Asistencia:</strong> {{ evento.assistance ?? evento.estimate ?? 0 }}</p>
        <p><strong>Precio:</strong> ${{ evento.price }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { obtenerEventos } from '../services/eventos'

const route = useRoute()
const evento = ref(null)
const error = ref('')
onMounted(async () => {
  try {
    const datos = await obtenerEventos()
    evento.value = datos.events.find(e => String(e._id) === String(route.params.id))
    if (!evento.value) error.value = 'No se encontró ese evento.'
  } catch {
    error.value = 'No se pudo cargar el detalle del evento.'
  }
})
</script>