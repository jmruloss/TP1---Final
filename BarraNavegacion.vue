<template>
  <v-app-bar color="primary" elevation="2">
    <v-app-bar-title>
      <router-link to="/" class="marca">JM Eventos</router-link>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn to="/" variant="text">Inicio</v-btn>
    <v-btn to="/pasados" variant="text">Pasados</v-btn>
    <v-btn to="/proximos" variant="text">Futuros</v-btn>
    <v-btn to="/estadisticas" variant="text">Estadisticas</v-btn>
    <v-btn to="/contacto" variant="text">Contacto</v-btn>
  </v-app-bar>
</template>

<style scoped>
.marca { color: white; text-decoration: none; }
</style>