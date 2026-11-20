<template>
  <v-app>
    <BarraNavegacion />
    <v-main>
      <v-container class="py-6">
        <router-view />
      </v-container>
    </v-main>
    <v-footer class="justify-center">
      Amazing Events | @losproitas
    </v-footer>
  </v-app>
</template>

<script setup>
import BarraNavegacion from './components/BarraNavegacion.vue'
</script>

<style>
*,
*::before,
*::after {
  animation: none !important;
  transition: none !important;
  scroll-behavior: auto !important;
}
</style>