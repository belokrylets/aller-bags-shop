import { $host } from "api"
import { IFormPersonalData } from "components/pages/profile/Profile"

export const update = async (body: IFormPersonalData) => {
  try {
    const response = await $host.put("api/userInfo", body)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
