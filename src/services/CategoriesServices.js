import { Categories } from "../models/models.js"
import { generateUuid } from "../utils/generateUuid.js"

class CategoriesServices {
  async create({ name, translate }) {
    try {
      const id = generateUuid()
      const createdCategories = await Categories.create({ id, name, translate })
      return createdCategories
    } catch (error) {
      console.log(error)
    }
  }
  async getAll() {
    try {
      const categories = await Categories.findAll()
      return categories
    } catch (error) {
      return error
    }
  }
  async update(category) {
    try {
      await Categories.update(
        { name: category.name, translate: category.translate },
        { where: { id: category.id } }
      )
      return category
    } catch (error) {
      return error
    }
  }
  async delete(id) {
    try {
      await Categories.destroy({ where: { id } })
      return id
    } catch (error) {
      return error
    }
  }
}

export default new CategoriesServices()
