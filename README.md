# Amazing Events - Vue 3

Proyecto migrado a Vue 3 con Composition API, Vue Router, Vuetify, Axios y Pinia.

## Requisitos
- Node.js y npm instalados.

## Instalación
1. Abrí una terminal dentro de la carpeta `amazing-events-vue`.
2. Ejecutá:

```bash
npm install
npm run dev
```

3. Abrí en el navegador la dirección que indique Vite.

## Datos
Los eventos se leen desde `public/evento.json` mediante Axios. Para usar una API de backend real, cambiá la URL en `src/services/eventos.js`.

## Vistas
- `/`: Home con búsqueda y filtro de categoría.
- `/pasados`: eventos con fecha anterior a hoy.
- `/proximos`: eventos de hoy en adelante.
- `/evento/:id`: detalle de un evento.
- `/contacto`: formulario validado.
- `/estadisticas`: cálculos de capacidad, asistencia y ocupación.

El tema claro/oscuro se administra con Pinia y se guarda en `localStorage`.
