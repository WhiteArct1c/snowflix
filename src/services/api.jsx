import axios from 'axios'

//Base da URL: https://api.themoviedb.org/3
//URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=bcba87548bafae0e8414d8dc43e926e3

const api = axios.create({
   baseURL: 'https://api.themoviedb.org/3'
})

export default api;