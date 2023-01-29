import { Image } from "../models/models.js"
import { generateUuid } from "../utils/generateUuid.js"
import path, { dirname } from "path"
import { fileURLToPath } from "url"
import { v4 } from "uuid"
import { unlink } from "fs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
class ImageServices {
  async create(img) {
    try {
      if (Array.isArray(img)) {
        let createdImages = []
        for (const newImage of img) {
          let fileName = `${v4()}.jpg`
          newImage.mv(path.resolve(__dirname, "..", "static", fileName))
          const id = generateUuid()
          const thumbnails = {}
          const image = await Image.create({ id, name: fileName, thumbnails })
          createdImages.push(image)
        }
        return createdImages
      } else {
        console.log("img", img)
        let fileName = `${v4()}.jpg`
        img.mv(path.resolve(__dirname, "..", "static", fileName))
        const id = generateUuid()
        const thumbnails = {}
        const image = await Image.create({ id, name: fileName, thumbnails })
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
      unlink(path.resolve(__dirname, "..", "static", fileName), (err) => {
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
