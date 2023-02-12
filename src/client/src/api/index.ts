import axios, { AxiosRequestConfig } from "axios"

export let url = "http://localhost:5000/"

const $host = axios.create({
  baseURL: url,
})
const $authHost = axios.create({
  baseURL: url,
})

const authInterceptor = (value: AxiosRequestConfig<any>) => {
  value.headers.authorization = `Bearer ${localStorage.getItem(`token`)}`
  return value
}

$authHost.interceptors.request.use(authInterceptor)

export { $host, $authHost }
