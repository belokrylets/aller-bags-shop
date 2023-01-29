import { $authHost } from "api"
import { ICategories } from "store/reducers/categoriesSlice/categories.modal"

export const create = async (body: { name: string; translate: string }) => {
  try {
    const response = await $authHost.post("api/categories", body)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const update = async (body: ICategories) => {
  try {
    const response = await $authHost.put("api/categories", body)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const deleting = async (id: string) => {
  try {
    const response = await $authHost.delete(`api/categories/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
