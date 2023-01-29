import { Router } from "express"
import userRouter from "./userRoutes.js"
import categoriesRouter from "./categoriesRoutes.js"
import productRouter from "./productRoutes.js"
import colorRouter from "./colorRoutes.js"
import genderRouter from "./genderRoutes.js"
import imageRouter from "./imageRoutes.js"

const router = new Router()

router.use("/user", userRouter)
router.use("/categories", categoriesRouter)
router.use("/product", productRouter)
router.use("/color", colorRouter)
router.use("/gender", genderRouter)
router.use("/images", imageRouter)

export default router
