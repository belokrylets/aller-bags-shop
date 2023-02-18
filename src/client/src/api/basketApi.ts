import { $host } from "api"

export const create = async (body: { basketId: string; productId: string }) => {
  try {
    const response = await $host.post("api/basketProduct", body)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const deleting = async (id: string) => {
  try {
    const response = await $host.delete(`api/basketProduct/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export const clearBasket = async (id: string) => {
  try {
    const response = await $host.post(`api/basket/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
