import { Router } from "express";
import userController from "../controllers/userController.js";
import validateUser from "../middlewares/validateUser.js";

const router = Router();

router.post("/register", validateUser, userController.registerUser);

export default router;
