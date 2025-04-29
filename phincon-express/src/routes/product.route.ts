import express from "express";
import ProductController from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getById);
router.post("/", ProductController.create);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.delete);

export default router;
