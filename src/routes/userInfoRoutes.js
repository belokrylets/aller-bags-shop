import { Router } from "express"
import userInfoController from "../controllers/UserInfoController.js"

const router = new Router()
router.get("/:id", userInfoController.getOne)
router.put("/", userInfoController.update)

export default router
