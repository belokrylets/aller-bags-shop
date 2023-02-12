import { BasketProduct } from "../models/models.js"
import { generateUuid } from "../utils/generateUuid.js"

class BasketProductServices {
  async create(basketId, productId) {
    try {
      const id = generateUuid()
      const createdBasketProduct = await BasketProduct.create({
        id,
        productId,
        basketId,
      })

      return createdBasketProduct
    } catch (error) {
      console.log(error)
    }
  }
  async delete(id) {
    try {
      await BasketProduct.destroy({ where: { id } })
      return id
    } catch (error) {
      return error
    }
  }
}

export default new BasketProductServices()
