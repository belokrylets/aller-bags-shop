import ApiError from "../error/ApiError.js"
import OrdersServices from "../services/OrdersServices.js"

class OrdersController {
  async create(req, res) {
    const newOrder = req.body
    const order = await OrdersServices.create(newOrder)
    return res.json(order)
  }
  async getAll(req, res) {
    const orders = await OrdersServices.getAll()
    return res.json(orders)
  }
  async update(req, res, next) {
    const order = req.body
    if (!order.id) {
      next(ApiError.badRequest("Отсутствует id"))
    }
    const updatedOrder = await OrdersServices.update(order)
    return res.json(updatedOrder)
  }
  async delete(req, res) {
    const { id } = req.params
    const deletedOrder = await OrdersServices.delete(id)
    return res.json(deletedOrder)
  }
}

export default new OrdersController()
