<template>
  <div>
    <h1 class="text-h4 mb-2">Contacto</h1>
    <p class="mb-5">Dejanos tu consulta y nos pondremos en contacto.</p>
    <v-card max-width="650" class="pa-4">
      <v-form @submit.prevent="enviar">
        <v-text-field v-model="nombre" label="Nombre" :rules="[reglas.requerido]" required></v-text-field>
        <v-text-field v-model="email" label="Correo electrónico" type="email"
          :rules="[reglas.requerido, reglas.email]" required></v-text-field>
        <v-textarea v-model="mensaje" label="Mensaje" :rules="[reglas.requerido]" required></v-textarea>
        <v-btn color="primary" type="submit">Enviar mensaje</v-btn>
      </v-form>
      <v-alert v-if="enviado" type="success" class="mt-4">
        ¡Gracias, {{ nombre }}! El formulario fue validado.
      </v-alert>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nombre = ref('')
const email = ref('')
const mensaje = ref('')
const enviado = ref(false)
const reglas = {
  requerido: valor => !!valor || 'Este campo es obligatorio.',
  email: valor => /.+@.+\..+/.test(valor) || 'Ingresá un correo válido.'
}
function enviar() {
  if (nombre.value.trim() && /.+@.+\..+/.test(email.value) && mensaje.value.trim()) {
    enviado.value = true
  }
}
</script>