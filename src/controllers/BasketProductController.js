import ApiError from "../error/ApiError.js"
import BasketProductServices from "../services/BasketProductServices.js"

class BasketProductController {
  async create(req, res) {
    const { basketId, productId } = req.body

    const basketProduct = await BasketProductServices.create(
      basketId,
      productId
    )
    return res.json(basketProduct)
  }
  async delete(req, res) {
    const { id } = req.params
    const deletedBasketProduct = await BasketProductServices.delete(id)
    return res.json(deletedBasketProduct)
  }
}

export default new BasketProductController()
