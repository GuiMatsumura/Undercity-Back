import { Router } from "express";
import userController from "../controllers/userController.js";
import validateUser from "../middlewares/validateUserRegister.js";
import validateLogin from "../middlewares/validateLogin.js";

const router = Router();

router.post("/register", validateUser, userController.registerUser);
router.post("/login", validateLogin, userController.login);

export default router;
