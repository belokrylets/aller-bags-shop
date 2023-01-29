import jwtDecode from "jwt-decode"
import { IUser } from "store/reducers/userSlice/user.modal"
import { $authHost, $host } from "./index"

export const registration = async (email: string, password: string) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
  })
  localStorage.setItem("token", data)
  return jwtDecode(data)
}
export const login = async (email: string, password: string) => {
  const { data } = await $host.post("api/user/login", { email, password })
  localStorage.setItem("token", data)
  return jwtDecode(data)
}

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth")
  localStorage.setItem("token", data)
  return jwtDecode(data)
}

export const update = async (body: IUser) => {
  try {
    const response = await $authHost.put("api/user", body)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const deleting = async (id: string) => {
  try {
    const response = await $authHost.delete(`api/user/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
