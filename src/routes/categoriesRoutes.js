import { Router } from "express"
import categoriesController from "../controllers/CategoriesController.js"
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js"

const router = new Router()

router.post("/", checkRoleMiddleware(), categoriesController.create)
router.get("/", categoriesController.getAll)
router.delete("/:id", checkRoleMiddleware(), categoriesController.delete)
router.put("/", checkRoleMiddleware(), categoriesController.update)

export default router
