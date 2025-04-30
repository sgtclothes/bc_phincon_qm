import express from "express";
import userRouter from "./user.route.js";
import productRouter from "./product.route.js";
import categoryRouter from "./category.route.js";
const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/categories", categoryRouter);

export default router;
