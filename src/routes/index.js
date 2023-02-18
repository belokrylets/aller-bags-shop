import { Router } from "express"
import userRouter from "./userRoutes.js"
import categoriesRouter from "./categoriesRoutes.js"
import productRouter from "./productRoutes.js"
import colorRouter from "./colorRoutes.js"
import genderRouter from "./genderRoutes.js"
import imageRouter from "./imageRoutes.js"
import ordersRouter from "./ordersRoutes.js"
import ordersSuccessRoutes from "./ordersSuccessRoutes.js"
import basketRoutes from "./basketRoutes.js"
import basketProductRoutes from "./basketProductRoutes.js"
import userInfoRoutes from "./userInfoRoutes.js"

const router = new Router()

router.use("/user", userRouter)
router.use("/categories", categoriesRouter)
router.use("/product", productRouter)
router.use("/color", colorRouter)
router.use("/gender", genderRouter)
router.use("/images", imageRouter)
router.use("/orders", ordersRouter)
router.use("/ordersSuccess", ordersSuccessRoutes)
router.use("/basket", basketRoutes)
router.use("/basketProduct", basketProductRoutes)
router.use("/userInfo", userInfoRoutes)

export default router
