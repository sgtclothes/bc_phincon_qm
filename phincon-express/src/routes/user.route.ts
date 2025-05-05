import express from "express";
import UserController from "../controllers/user.controller.js";
import { createUserValidator } from "../validator/user.validator.js";
const router = express.Router();

router.get("/", UserController.getAll);
router.get("/:id", UserController.getById);
router.post("/", createUserValidator, UserController.create);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

export default router;
