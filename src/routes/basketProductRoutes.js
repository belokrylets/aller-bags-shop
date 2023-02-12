import { Router } from "express"
import basketProductController from "../controllers/BasketProductController.js"
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js"

const router = new Router()

router.post("/", basketProductController.create)
router.delete("/:id", basketProductController.delete)

export default router
