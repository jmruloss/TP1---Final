<template>
  <div>
    <h1 class="text-h4 mb-2">JM Eventos</h1>
    <p class="mb-6">Encontra actividades y eventos para disfrutar</p>

    <v-text-field
      v-model="busqueda"
      label="Buscar por nombre"
      prepend-inner-icon="mdi-magnify"
      clearable
      variant="outlined"
    ></v-text-field>

    <v-btn color="primary" @click="mostrarCategorias = !mostrarCategorias">
      Categorias
    </v-btn>

    <div v-if="mostrarCategorias" class="mt-3 mb-5">
      <v-btn
        class="ma-1"
        variant="outlined"
        @click="categoria = ''"
      >
        Todas
      </v-btn>

      <v-btn
        v-for="cat in categorias"
        :key="cat"
        class="ma-1"
        variant="outlined"
        @click="categoria = cat"
      >
        {{ cat }}
      </v-btn>
    </div>

    <v-alert v-if="error" type="error" class="mb-4">
      {{ error }}
    </v-alert>

    <v-progress-linear
      v-if="cargando"
      indeterminate
      color="primary"
    ></v-progress-linear>

    <v-row v-else>
      <v-col
        v-for="evento in eventosFiltrados"
        :key="evento._id"
        cols="12"
        sm="6"
        md="4"
      >
        <TarjetaEvento :evento="evento" />
      </v-col>
    </v-row>

    <p v-if="!cargando && eventosFiltrados.length === 0">
      No se encontraron eventos
    </p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { obtenerEventos } from '../services/eventos'
import TarjetaEvento from '../components/TarjetaEvento.vue'

const eventos = ref([])
const busqueda = ref('')
const categoria = ref('')
const mostrarCategorias = ref(false)
const cargando = ref(true)
const error = ref('')

const categorias = computed(() => {
  return [...new Set(eventos.value.map(e => e.category))]
})

const eventosFiltrados = computed(() => {
  return eventos.value.filter(e => {
    const coincideNombre = e.name.toLowerCase().includes(
      (busqueda.value || '').toLowerCase()
    )

    const coincideCategoria = !categoria.value ||
      e.category === categoria.value

    return coincideNombre && coincideCategoria
  })
})

onMounted(async () => {
  try {
    const datos = await obtenerEventos()
    eventos.value = datos.events
  } catch {
    error.value = 'No se pudieron cargar los eventos.'
  } finally {
    cargando.value = false
  }
})
</script>