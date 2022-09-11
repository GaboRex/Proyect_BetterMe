import axios from 'axios'
const API_URL='http://localhost:5000/api/v1/cliente'
export default axios.create({
    baseURL: API_URL
})