import ApiError from "../error/ApiError.js"
import ImageServices from "../services/ImageServices.js"

class ImageController {
  async create(req, res) {
    console.log("req.files", req)

    const { img } = req.files

    const image = await ImageServices.create(img)
    return res.json(image)
  }
  async getAll(req, res) {
    const image = await ImageServices.getAll()
    return res.json(image)
  }

  async delete(req, res) {
    const { id } = req.params
    const { fileName } = req.body
    const deletedImage = await ImageServices.delete(id, fileName)
    return res.json(deletedImage)
  }
}

export default new ImageController()
