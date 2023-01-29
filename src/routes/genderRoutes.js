import { Router } from "express"
import genderController from "../controllers/GenderController.js"
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js"

const router = new Router()

router.post("/", checkRoleMiddleware(), genderController.create)
router.get("/", genderController.getAll)
router.delete("/:id", checkRoleMiddleware(), genderController.delete)
router.put("/", checkRoleMiddleware(), genderController.update)

export default router
