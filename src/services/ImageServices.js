import { Image } from "../models/models.js"
import { generateUuid } from "../utils/generateUuid.js"
import path, { dirname } from "path"
import { fileURLToPath } from "url"
import { v4 } from "uuid"
import { unlink, mkdirSync, rmdirSync } from "fs"

import createThumbnails from "../utils/createThumbnails.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
class ImageServices {
  async create(img, productId) {
    try {
      if (Array.isArray(img)) {
        let createdImages = []
        for (const newImage of img) {
          let fileName = `${v4()}.jpg`
          const id = generateUuid()
          mkdirSync(path.resolve(__dirname, "..", "static", id))
          newImage.mv(path.resolve(__dirname, "..", "static", id, fileName))

          const thumbnails = createThumbnails(newImage, id, fileName)

          const image = await Image.create({
            id,
            name: fileName,
            path: `id/${fileName}`,
            type: "image/jpg",
            thumbnails,
            productId,
          })
          createdImages.push(image)
        }
        return createdImages
      } else {
        const id = generateUuid()

        let fileName = `${v4()}.jpg`
        mkdirSync(path.resolve(__dirname, "..", "static", id))
        img.mv(path.resolve(__dirname, "..", "static", id, fileName))

        const thumbnails = createThumbnails(img, id, fileName)

        const image = await Image.create({
          id,
          name: fileName,
          path: `id/${fileName}`,
          type: "image/jpg",
          thumbnails,
          productId,
        })
        return image
      }
    } catch (error) {
      return error
    }
  }
  async getAll() {
    try {
      const image = await Image.findAll()
      return image
    } catch (error) {
      return error
    }
  }

  async delete(id, fileName) {
    try {
      rmdirSync(path.resolve(__dirname, "..", "static", id), (err) => {
        if (err) throw err
      })
      await Image.destroy({ where: { id } })
      return id
    } catch (error) {
      return error
    }
  }
}

export default new ImageServices()
