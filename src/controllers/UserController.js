import ApiError from "../error/ApiError.js"
import bcrypt from "bcrypt"
import { User } from "../models/models.js"
import jwt from "jsonwebtoken"
import { generateUuid } from "../utils/generateUuid.js"
import UserServices from "../services/UserServices.js"

class UserController {
  async registration(req, res, next) {
    const { email, password, roles } = req.body
    const token = await UserServices.registration(email, password, roles, next)
    return res.json(token)
  }
  async login(req, res, next) {
    const { email, password } = req.body
    const token = await UserServices.login(email, password, next)

    return res.json(token)
  }
  async check(req, res) {
    const token = await UserServices.check(
      req.user.id,
      req.user.email,
      req.user.roles
    )
    return res.json(token)
  }
  async delete(req, res) {
    const { id } = req.params
    const deletedUser = await UserServices.delete(id)
    return res.json(deletedUser)
  }
  async getAll(req, res) {
    const users = await UserServices.getAll()
    return res.json(users)
  }
  async update(req, res, next) {
    const user = req.body
    if (!user.id) {
      next(ApiError.badRequest("Отсутствует id"))
    }
    const updatedUser = await UserServices.update(user)
    return res.json(updatedUser)
  }
}

export default new UserController()
