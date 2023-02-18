import { Router } from "express"
import ordersSuccessController from "../controllers/OrdersSuccessController.js"
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js"

const router = new Router()
router.post("/", ordersSuccessController.create)
router.get("/", checkRoleMiddleware(), ordersSuccessController.getAll)
router.delete("/:id", checkRoleMiddleware(), ordersSuccessController.delete)
export default router
