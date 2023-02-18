import ApiError from "../error/ApiError.js"
import OrdersSuccessServices from "../services/OrdersSuccessServices.js"

class OrdersSuccessController {
  async create(req, res) {
    const newOrder = req.body
    const orderSuccess = await OrdersSuccessServices.create(newOrder)
    return res.json(orderSuccess)
  }
  async getAll(req, res) {
    const ordersSuccess = await OrdersSuccessServices.getAll()
    return res.json(ordersSuccess)
  }

  async delete(req, res) {
    const { id } = req.params
    const deletedOrderSuccess = await OrdersSuccessServices.delete(id)
    return res.json(deletedOrderSuccess)
  }
}

export default new OrdersSuccessController()
