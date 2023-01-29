import ApiError from "../error/ApiError.js"
import CategoriesServices from "../services/CategoriesServices.js"

class CategoriesController {
  async create(req, res) {
    const newCategory = req.body

    const categories = await CategoriesServices.create(newCategory)
    return res.json(categories)
  }
  async getAll(req, res) {
    const categories = await CategoriesServices.getAll()
    return res.json(categories)
  }
  async update(req, res, next) {
    const category = req.body
    if (!category.id) {
      next(ApiError.badRequest("Отсутствует id"))
    }
    const updatedCategory = await CategoriesServices.update(category)
    return res.json(updatedCategory)
  }
  async delete(req, res) {
    const { id } = req.params
    const deletedCategory = await CategoriesServices.delete(id)
    return res.json(deletedCategory)
  }
}

export default new CategoriesController()
