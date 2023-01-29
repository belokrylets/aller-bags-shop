import ApiError from "../error/ApiError.js"
import ColorServices from "../services/ColorServices.js"

class ColorController {
  async create(req, res) {
    const newColor = req.body
    const color = await ColorServices.create(newColor)
    return res.json(color)
  }
  async getAll(req, res) {
    const color = await ColorServices.getAll()
    return res.json(color)
  }
  async update(req, res, next) {
    const color = req.body
    if (!color.id) {
      next(ApiError.badRequest("Отсутствует id"))
    }
    const updatedColor = await ColorServices.update(color)
    return res.json(updatedColor)
  }
  async delete(req, res) {
    const { id } = req.params
    const deletedColor = await ColorServices.delete(id)
    return res.json(deletedColor)
  }
}

export default new ColorController()
