import express from "express"
import fileUpload from "express-fileupload"
import "dotenv/config.js"
import sequelize from "./db.js"
import router from "./routes/index.js"
import cors from "cors"
import path, { dirname } from "path"
import { fileURLToPath } from "url"
import errorHandler from "./middleware/ErrorHandlingMiddleware.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, "static")))
app.use(fileUpload({}))
app.use("/api", router)
// if (process.env.NODE_ENV === "production") {
app.use("/", express.static(path.resolve(__dirname, "client", "build")))
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})
// }
// errorHandler идет замыкающим
app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}
start()
