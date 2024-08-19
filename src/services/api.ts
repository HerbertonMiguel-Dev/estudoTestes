import axios from 'axios'

// https://sujeitoprogramador.com/   next-api/?api=game&id=15
const api = axios.create({
  baseURL: "https://sujeitoprogramador.com"
})

export default api;