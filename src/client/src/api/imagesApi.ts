import { $authHost } from "api"

export const create = async (body: FormData) => {
  try {
    const response = await $authHost.post("api/images", body, {
      headers: { "Content-Type": "multipart/form-data" },
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const deleting = async (id: string, fileName: string) => {
  try {
    const response = await $authHost.delete(`api/images/${id}`, {
      data: { fileName: fileName },
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
