import axios from 'axios'

const request = axios.create({
    baseURL:'/api'
})

request.interceptors.request.use()

request.interceptors.response.use()

export default request
