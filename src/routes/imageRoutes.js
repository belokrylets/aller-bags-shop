import { Router } from "express"
import imageController from "../controllers/ImageController.js"
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js"

const router = new Router()

router.post("/", checkRoleMiddleware(), imageController.create)
router.get("/", imageController.getAll)
router.delete("/:id", checkRoleMiddleware(), imageController.delete)

export default router
