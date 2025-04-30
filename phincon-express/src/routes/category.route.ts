import express from "express";
import CategoryController from "../controllers/category.controller.js";

const router = express.Router();

router.get("/", CategoryController.getAll);

export default router;
