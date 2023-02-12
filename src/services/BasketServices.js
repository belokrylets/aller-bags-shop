import { Basket, BasketProduct, Color, Product } from "../models/models.js"
import { generateUuid } from "../utils/generateUuid.js"
import BasketProductServices from "./BasketProductServices.js"
class BasketServices {
  async create(basketId, userId) {
    try {
      const basket = await Basket.create({ id: basketId, userId: userId })
      return basket
    } catch (error) {
      return error
    }
  }
  async getOne(id) {
    try {
      const basket = await Basket.findOne({
        where: { id },
        include: [{ model: BasketProduct, as: "products" }],
      })
      return basket
    } catch (error) {
      return error
    }
  }
  async update(body) {
    try {
      const updatedBasket = await Basket.update({
        where: { id: body.id },
        include: [{ model: BasketProduct, as: "products" }],
      })

      return updatedBasket
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

export default new BasketServices()
