import ApiError from "../error/ApiError.js"
import BasketServices from "../services/BasketServices.js"

class BasketController {
  async create(userId) {
    const basket = await BasketServices.create(userId)
    return res.json(basket)
  }
  async getOne(req, res) {
    const { id } = req.params
    console.log("req.params")
    const basket = await BasketServices.getOne(id)
    return res.json(basket)
  }
}

export default new BasketController()
