import { $authHost, $host } from "api"

export const create = async (body: {
  fullName: string
  phone: string
  email: string
  productsIds: string
}) => {
  try {
    const response = await $host.post("api/ordersSuccess", body)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export const deleting = async (id: string) => {
  try {
    const response = await $authHost.delete(`api/ordersSuccess/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
