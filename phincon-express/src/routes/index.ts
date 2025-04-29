import express from "express";
import userRouter from "./user.route.js";
import productRouter from "./product.route.js";
const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);

export default router;
