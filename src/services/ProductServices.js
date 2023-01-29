import { Product } from "../models/models.js"
import { generateUuid } from "../utils/generateUuid.js"

class ProductServices {
  async create({
    name,
    description,
    price,
    categoryId,
    colorId,
    genderId,
    slug,
    imageId,
    size,
  }) {
    try {
      const id = generateUuid()
      const product = await Product.create({
        id,
        name,
        description,
        price,
        categoryId,
        imageId,
        colorId,
        genderId,
        size,
        slug,
      })
      return product
    } catch (error) {
      return error
    }
  }
  async getAll(allProducts) {
    try {
      let { categoriesId, limit, page } = allProducts
      page = page || 1
      limit = limit || 10
      let offset = page * limit - limit
      let products
      if (!categoriesId) {
        products = await Product.findAndCountAll({ limit, offset })
      } else {
        products = await Product.findAndCountAll({
          where: { categoriesId, limit, offset },
        })
      }
      return products
    } catch (error) {
      return error
    }
  }
  async getOne(id) {
    try {
      const product = await Product.findOne({
        where: { id },
      })
      return product
    } catch (error) {
      return error
    }
  }
  async update(product) {
    try {
      await Product.update(product, {
        where: { id: product.id },
      })
      return product
    } catch (error) {
      return error
    }
  }
  async delete(id) {
    try {
      await Product.destroy({
        where: { id },
      })
      return id
    } catch (error) {
      return error
    }
  }
}

export default new ProductServices()
