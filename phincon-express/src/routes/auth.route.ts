import express from "express";
import AuthController from "../controllers/auth.controller.js";
import { loginValidator, registerValidator } from "../validator/auth.validator.js";

const router = express.Router();

router.post("/login", loginValidator, AuthController.login);
router.post("/register", registerValidator, AuthController.register);

export default router;
