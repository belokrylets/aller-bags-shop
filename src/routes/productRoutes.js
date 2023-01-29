import { Router } from "express"
import productController from "../controllers/ProductController.js"
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js"

const router = new Router()
router.post("/", checkRoleMiddleware(), productController.create)
router.get("/", productController.getAll)
router.get("/:id", productController.getOne)
router.delete("/:id", checkRoleMiddleware(), productController.delete)
router.put("/", checkRoleMiddleware(), productController.update)

export default router
