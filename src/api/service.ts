import { Axios } from "axios"

const apiService = new Axios({
    baseURL: "http://192.168.0.13:8000/v1/",
})

apiService.interceptors.request.use((config) => {
    const token = localStorage.getItem("auth-token")
    if (token)  config.headers['Authorization'] = `Token ${token}`
    return config;
})

export default apiService