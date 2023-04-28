import { $authHost } from "api"

export const create = async (body: FormData) => {
  try {
    const response = await $authHost.post("api/product", body, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const update = async (body: FormData) => {
  try {
    const response = await $authHost.put("api/product", body, {
      headers: { "Content-Type": "multipart/form-data" },
    })

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
