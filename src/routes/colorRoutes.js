import { Router } from "express"
import colorController from "../controllers/ColorController.js"
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js"

const router = new Router()

router.post("/", checkRoleMiddleware(), colorController.create)
router.get("/", colorController.getAll)
router.delete("/:id", checkRoleMiddleware(), colorController.delete)
router.put("/", checkRoleMiddleware(), colorController.update)

export default router
