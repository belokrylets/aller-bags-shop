import { Product, Image } from "../models/models.js"
import { generateUuid } from "../utils/generateUuid.js"
import ImageServices from "./ImageServices.js"

class ProductServices {
  async create(
    { name, description, price, categoryId, colorId, genderId, slug, size },
    img
  ) {
    try {
      const id = generateUuid()

      const product = await Product.create({
        id,
        name,
        description,
        price: Number(price),
        categoryId,
        colorId,
        genderId,
        size,
        slug,
      })
      const images = await ImageServices.create(img, id)
      let imagesIds = []
      if (Array.isArray(images)) {
        for (const image of images) {
          imagesIds.push(image.id)
        }
      } else {
        imagesIds.push(images.id)
      }
      return { ...product.dataValues, imagesIds: imagesIds }
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
        products = await Product.findAndCountAll({
          limit,
          offset,
          include: [{ model: Image, as: "imagesIds" }],
        })
      } else {
        products = await Product.findAndCountAll({
          where: { categoriesId, limit, offset },
          include: [{ model: Image, as: "imagesIds" }],
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
        include: [{ model: Image, as: "imagesIds" }],
      })
      return product
    } catch (error) {
      return error
    }
  }
  async update(product, img) {
    try {
      await Product.update(
        { ...product, price: Number(product.price) },
        {
          where: { id: product.id },
        }
      )
      if (img) {
        await ImageServices.create(img, product.id)
      }
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
