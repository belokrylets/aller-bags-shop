import axios, { AxiosRequestConfig } from "axios"

const $host = axios.create({
  baseURL: "http://188.68.223.243/",
})
const $authHost = axios.create({
  baseURL: "http://188.68.223.243/",
})

const authInterceptor = (value: AxiosRequestConfig<any>) => {
  value.headers.authorization = `Bearer ${localStorage.getItem(`token`)}`
  return value
}

$authHost.interceptors.request.use(authInterceptor)

export { $host, $authHost }
