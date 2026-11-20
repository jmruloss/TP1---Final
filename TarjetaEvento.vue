<template>
  <v-card class="h-100" elevation="3">
    <v-img :src="evento.image" height="190" cover :alt="evento.name"></v-img>
    <v-card-title>{{ evento.name }}</v-card-title>
    <v-card-subtitle>{{ evento.date }} · {{ evento.category }}</v-card-subtitle>
    <v-card-text>
      <p>{{ evento.description }}</p>
      <p class="mt-2"><strong>Lugar:</strong> {{ evento.place }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" :to="'/evento/' + evento._id">Ver mas</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  evento: { type: Object, required: true }
})
</script>