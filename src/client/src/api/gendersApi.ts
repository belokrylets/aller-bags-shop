import { $authHost } from "api"
import { ICategories } from "store/reducers/categoriesSlice/categories.modal"

export const create = async (body: { name: string; translate: string }) => {
  try {
    const response = await $authHost.post("api/gender", body)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const update = async (body: ICategories) => {
  try {
    const response = await $authHost.put("api/gender", body)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const deleting = async (id: string) => {
  try {
    const response = await $authHost.delete(`api/gender/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
