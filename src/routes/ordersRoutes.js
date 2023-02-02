import { Router } from "express"
import ordersController from "../controllers/OrdersController.js"
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js"

const router = new Router()
router.post("/", ordersController.create)
router.get("/", checkRoleMiddleware(), ordersController.getAll)
router.delete("/:id", checkRoleMiddleware(), ordersController.delete)
router.put("/", checkRoleMiddleware(), ordersController.update)
export default router
