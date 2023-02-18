import { OrdersSuccess } from "../models/models.js"
import { generateUuid } from "../utils/generateUuid.js"
import sendOrder from "../utils/sendOrder.js"

class OrdersSuccessServices {
  async create({ fullName, phone, email, productsIds }) {
    try {
      const id = generateUuid()
      const orderSuccess = await OrdersSuccess.create({
        id,
        fullName,
        phone,
        email,
        productsIds,
      })
      await sendOrder(email, phone, productsIds, fullName, "orderSuccess")
      return orderSuccess
    } catch (error) {
      return error
    }
  }
  async getAll() {
    try {
      const ordersSuccess = await OrdersSuccess.findAll()
      return ordersSuccess
    } catch (error) {
      return error
    }
  }

  async delete(id) {
    try {
      await OrdersSuccess.destroy({ where: { id } })
      return id
    } catch (error) {
      return error
    }
  }
}

export default new OrdersSuccessServices()
