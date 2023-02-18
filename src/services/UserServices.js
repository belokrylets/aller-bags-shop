import { Basket, User, UserInfo } from "../models/models.js"
import { generateUuid } from "../utils/generateUuid.js"
import bcrypt from "bcrypt"
import { generateJwt } from "../utils/generateJwt.js"
import ApiError from "../error/ApiError.js"
import BasketServices from "./BasketServices.js"
import UserInfoServices from "./UserInfoServices.js"

class UserServices {
  async registration(email, password, roles, next) {
    if (!email || !password) {
      return next(ApiError.badRequest("Некорректный email или пароль"))
    }
    const candidate = await User.findOne({ where: { email } })
    if (candidate) {
      return next(
        ApiError.badRequest(
          `Пользователь с почтой ${email} уже зарегистрирован`
        )
      )
    }

    const hashPassword = await bcrypt.hash(password, 5)
    const id = generateUuid()
    const basketId = generateUuid()
    const user = await User.create({
      id,
      email,
      password: hashPassword,
      roles,
      basketId,
    })
    await BasketServices.create(basketId, user.id)
    await UserInfoServices.create(id)
    const token = generateJwt(id, user.email, user.roles, user.basketId)
    console.log("token", token)

    return token
  }
  async login(email, password, next) {
    const user = await User.findOne({ where: { email } })
    if (!user) {
      return next(
        ApiError.badRequest(`Пользователь с почтой ${email} не зарегистрирован`)
      )
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.badRequest(`Неверный пароль`))
    }
    const token = generateJwt(user.id, user.email, user.roles, user.basketId)
    return token
  }
  async check(id, email, roles, basketId) {
    const token = generateJwt(id, email, roles, basketId)

    return token
  }
  async delete(id) {
    const user = await User.findOne({
      where: { id },
    })
    await UserInfoServices.delete(id)
    await Basket.destroy({ where: { id: user.basketId } })
    await User.destroy({ where: { id } })
    return id
  }
  async getAll() {
    const users = User.findAll()
    return users
  }
  async update(user) {
    try {
      await User.update(
        { email: user.email, roles: user.roles },
        { where: { id: user.id } }
      )

      return user
    } catch (error) {
      return error
    }
  }
}

export default new UserServices()
