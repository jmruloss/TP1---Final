import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { useThemeStore } from './stores/themeStore'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#42A5F5',
          background: '#E3F2FD'
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: '#64B5F6',
          secondary: '#90CAF9',
          background: '#121E2B'
        }
      }
    }
  }
})
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(vuetify)

const themeStore = useThemeStore()
vuetify.theme.global.name.value = themeStore.tema
app.mount('#app')