import { $authHost, $host } from "api"

export const create = async (body: {
  email: string
  phone: string
  comment: string
}) => {
  try {
    const response = await $host.post("api/orders", body)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export const deleting = async (id: string) => {
  try {
    const response = await $authHost.delete(`api/orders/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
