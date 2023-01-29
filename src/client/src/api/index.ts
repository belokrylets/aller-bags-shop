import axios, { AxiosRequestConfig } from "axios"

const $host = axios.create({
  baseURL: "http://localhost:5000/",
})
const $authHost = axios.create({
  baseURL: "http://localhost:5000/",
})

const authInterceptor = (value: AxiosRequestConfig<any>) => {
  value.headers.authorization = `Bearer ${localStorage.getItem(`token`)}`
  return value
}

$authHost.interceptors.request.use(authInterceptor)

export { $host, $authHost }
