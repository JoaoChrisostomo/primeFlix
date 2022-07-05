import axios from 'axios'

// BASE DA URL: http://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=6a147fefcedfb3e27ff6a2dab4910495&language=pt-BR

const api = axios.create({
  baseURL: 'http://api.themoviedb.org/3/'
})

export default api