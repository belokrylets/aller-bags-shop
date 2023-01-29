import ApiError from "../error/ApiError.js"
import GenderServices from "../services/GenderServices.js"

class GenderController {
  async create(req, res) {
    const newGender = req.body
    const gender = await GenderServices.create(newGender)
    return res.json(gender)
  }
  async getAll(req, res) {
    const gender = await GenderServices.getAll()
    return res.json(gender)
  }
  async update(req, res, next) {
    const gender = req.body
    if (!gender.id) {
      next(ApiError.badRequest("Отсутствует id"))
    }
    const updatedGender = await GenderServices.update(gender)
    return res.json(updatedGender)
  }
  async delete(req, res) {
    const { id } = req.params
    const deletedGender = await GenderServices.delete(id)
    return res.json(deletedGender)
  }
}

export default new GenderController()
