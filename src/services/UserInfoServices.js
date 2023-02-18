import { User, UserInfo } from "../models/models.js"
import { generateUuid } from "../utils/generateUuid.js"
import UserServices from "./UserServices.js"

class UserInfoServices {
  async create(userId) {
    try {
      const id = generateUuid()
      const userInfo = UserInfo.create({
        id: id,
        name: "",
        surname: "",
        patronymic: "",
        phone: "",
        userId: userId,
      })
      return userInfo
    } catch (error) {
      return error
    }
  }
  async getOne(userId) {
    try {
      const userInfo = await UserInfo.findOne({
        where: { userId },
      })
      return userInfo
    } catch (error) {
      return error
    }
  }
  async update(userInfo) {
    try {
      const user = await User.findOne({
        where: { id: userInfo.userId },
      })
      await UserServices.update({
        id: user.id,
        roles: user.roles,
        email: userInfo.email,
      })
      await UserInfo.update(
        {
          name: userInfo.name,
          surname: userInfo.surname,
          patronymic: userInfo.patronymic,
          phone: userInfo.phone,
        },
        { where: { id: userInfo.id } }
      )
      return userInfo
    } catch (error) {
      return error
    }
  }
  async delete(id) {
    try {
      await UserInfo.destroy({ where: { id } })
      return id
    } catch (error) {
      return error
    }
  }
}

export default new UserInfoServices()
