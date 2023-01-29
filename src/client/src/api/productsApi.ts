import { $authHost } from "api"
import axios from "axios"
import { IProducts } from "store/reducers/productsSlice/products.modal"

export const create = async (body: IProducts) => {
  try {
    const response = await $authHost.post("api/product", body)

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const update = async (body: IProducts) => {
  try {
    const response = await $authHost.put("api/product", body)

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const deleting = async (id: string) => {
  try {
    const response = await $authHost.delete(`api/product/${id}`)

    return response.data
  } catch (error) {
    console.log(error)
  }
}
