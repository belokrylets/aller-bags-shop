import { Gender } from "../models/models.js"
import { generateUuid } from "../utils/generateUuid.js"

class GenderServices {
  async create({ name, translate }) {
    try {
      const id = generateUuid()
      const gender = await Gender.create({ id, name, translate })
      return gender
    } catch (error) {
      return error
    }
  }
  async getAll() {
    try {
      const gender = await Gender.findAll()
      return gender
    } catch (error) {
      return error
    }
  }
  async update(gender) {
    try {
      await Gender.update(
        { name: gender.name, translate: gender.translate },
        { where: { id: gender.id } }
      )
      return gender
    } catch (error) {
      return error
    }
  }
  async delete(id) {
    try {
      await Gender.destroy({ where: { id } })
      return id
    } catch (error) {
      return error
    }
  }
}

export default new GenderServices()
