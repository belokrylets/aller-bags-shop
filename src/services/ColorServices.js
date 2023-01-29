import { Color } from "../models/models.js"
import { generateUuid } from "../utils/generateUuid.js"

class ColorServices {
  async create({ name, translate }) {
    try {
      const id = generateUuid()
      const color = await Color.create({ id, name, translate })
      return color
    } catch (error) {
      return error
    }
  }
  async getAll() {
    try {
      const color = await Color.findAll()
      return color
    } catch (error) {
      return error
    }
  }
  async update(color) {
    try {
      await Color.update(
        { name: color.name, translate: color.translate },
        { where: { id: color.id } }
      )

      return color
    } catch (error) {
      return error
    }
  }
  async delete(id) {
    try {
      await Color.destroy({ where: { id } })
      return id
    } catch (error) {
      return error
    }
  }
}

export default new ColorServices()
