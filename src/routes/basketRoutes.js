import { Router } from "express"
import basketController from "../controllers/BasketController.js"
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js"

const router = new Router()

router.post("/", basketController.create)
router.post("/:id", basketController.clear)
router.get("/:id", basketController.getOne)

export default router
