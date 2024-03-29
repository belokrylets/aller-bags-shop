import { $host } from "api"
import { IFormPersonalData } from "components/pages/Profile/profile.interfaces"

export const update = async (body: IFormPersonalData) => {
  try {
    const response = await $host.put("api/userInfo", body)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
