import sharp from "sharp"
import path, { dirname } from "path"
import { fileURLToPath } from "url"
import { v4 } from "uuid"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const createThumbnails = (img, parentId, fileName) => {
  sharp(img.data)
    .resize({
      width: 150,
      height: 150,
      fit: "cover",
      position: "center",
    })
    .toFile(
      path.resolve(__dirname, "..", "static", parentId, `e_150x150_${fileName}`)
    )
  sharp(img.data)
    .resize({
      height: 500,
      fit: "cover",
      position: "center",
    })
    .toFile(
      path.resolve(__dirname, "..", "static", parentId, `h_500_${fileName}`)
    )
  sharp(img.data)
    .resize({
      width: 300,
      fit: "cover",
      position: "center",
    })
    .toFile(
      path.resolve(__dirname, "..", "static", parentId, `w_300_${fileName}`)
    )
  sharp(img.data)
    .resize({
      width: 400,
      fit: "cover",
      position: "center",
    })
    .toFile(
      path.resolve(__dirname, "..", "static", parentId, `w_400_${fileName}`)
    )
  sharp(img.data)
    .resize({
      width: 500,

      fit: "cover",
      position: "center",
    })
    .toFile(
      path.resolve(__dirname, "..", "static", parentId, `w_500_${fileName}`)
    )

  return {
    origin: {
      name: `${fileName}`,
      parentId: parentId,
      path: `${parentId}/${fileName}`,
      thumbnailsSize: "origin",
      id: v4(),
    },

    e_150x150: {
      name: `e_150x150_${fileName}`,
      parentId: parentId,
      path: `${parentId}/e_150x150_${fileName}`,
      thumbnailsSize: "e_150x150",
      id: v4(),
    },
    h_500: {
      name: `h_500_${fileName}`,
      parentId: parentId,
      path: `${parentId}/h_500_${fileName}`,
      thumbnailsSize: "h_500",
      id: v4(),
    },
    w_300: {
      name: `w_300_${fileName}`,
      parentId: parentId,
      path: `${parentId}/w_300_${fileName}`,
      thumbnailsSize: "w_300",
      id: v4(),
    },
    w_400: {
      name: `w_400_${fileName}`,
      parentId: parentId,
      path: `${parentId}/w_400_${fileName}`,
      thumbnailsSize: "w_400",
      id: v4(),
    },
    w_500: {
      name: `w_500_${fileName}`,
      parentId: parentId,
      path: `${parentId}/w_500_${fileName}`,
      thumbnailsSize: "w_500",
      id: v4(),
    },
  }
}

export default createThumbnails
