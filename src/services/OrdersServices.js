import { Orders } from "../models/models.js"
import { generateUuid } from "../utils/generateUuid.js"
import sendOrder from "../utils/sendOrder.js"

class OrdersServices {
  async create({ email, phone, comment }) {
    try {
      const id = generateUuid()
      const order = await Orders.create({ id, email, phone, comment })
      await sendOrder(email, phone, comment)
      return order
    } catch (error) {
      return error
    }
  }
  async getAll() {
    try {
      const order = await Orders.findAll()
      return order
    } catch (error) {
      return error
    }
  }
  async update(order) {
    try {
      await Orders.update(
        { email: order.email, phone: order.phone, comment: order.comment },
        { where: { id: order.id } }
      )

      return order
    } catch (error) {
      return error
    }
  }
  async delete(id) {
    try {
      await Orders.destroy({ where: { id } })
      return id
    } catch (error) {
      return error
    }
  }
}

export default new OrdersServices()
