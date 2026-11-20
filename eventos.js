import axios from 'axios'

export async function obtenerEventos() {
  const respuesta = await axios.get('/evento.json')
  return respuesta.data
}