import { Router } from "express"
import userController from "../controllers/UserController.js"
import authMiddleware from "../middleware/authMiddleware.js"
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js"

const router = new Router()
router.post("/registration", userController.registration)
router.post("/login", userController.login)
router.get("/auth", authMiddleware, userController.check)
router.get("/", checkRoleMiddleware(), userController.getAll)
router.put("/", checkRoleMiddleware(), userController.update)
router.delete("/:id", checkRoleMiddleware(), userController.delete)

export default router
