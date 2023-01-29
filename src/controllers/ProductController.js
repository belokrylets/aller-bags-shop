import ApiError from "../error/ApiError.js"
import { fileURLToPath } from "url"

import ProductServices from "../services/ProductServices.js"

const __filename = fileURLToPath(import.meta.url)

class ProductController {
  async create(req, res, next) {
    try {
      const newProduct = req.body
      const product = await ProductServices.create(newProduct)
      return res.json(product)
    } catch (error) {
      next(ApiError.badRequest(error.message))
    }
  }
  async getAll(req, res) {
    const allProducts = req.query
    const products = await ProductServices.getAll(allProducts)
    return res.json(products)
  }
  async getOne(req, res) {
    const { id } = req.params
    const product = await ProductServices.getOne(id)
    return res.json(product)
  }
  async update(req, res) {
    const product = req.body
    const updatedProduct = await ProductServices.update(product)
    return res.json(updatedProduct)
  }
  async delete(req, res) {
    const { id } = req.params
    const deleteProduct = await ProductServices.delete(id)
    return res.json(deleteProduct)
  }
}

export default new ProductController()
