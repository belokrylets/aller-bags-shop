import ApiError from "../error/ApiError.js"
import UserInfoServices from "../services/UserInfoServices.js"

class UserInfoController {
    async update(req, res, next){
        const userInfo = req.body
        if (!userInfo.id) {
            next(ApiError.badRequest("Отсутствует id"))
          }
          const updatedUserInfo = await UserInfoServices.update(userInfo)
          return res.json(updatedUserInfo)
    }
    async getOne(req, res) {
        const { id } = req.params
        const userInfo = await UserInfoServices.getOne(id)
        return res.json(userInfo)
      }
}

export default new UserInfoController()