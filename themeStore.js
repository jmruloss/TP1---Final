import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    tema: localStorage.getItem('tema') || 'ligth'
  }),
  actions: {
    cambiarTema() {
      this.tema = this.tema === 'light' ? 'dark' : 'light'
      localStorage.setItem('tema', this.tema)
    }
  }
})