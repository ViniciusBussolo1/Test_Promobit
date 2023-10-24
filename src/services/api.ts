import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.ACCESS_TOKEN as string,
  },
})

export default api
