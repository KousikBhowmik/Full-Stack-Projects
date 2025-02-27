import { Router } from "express";
import { login, singUp } from "../middlewares/authMiddleware.js";

const authRoutes = Router();

authRoutes.post('/singup', singUp);
authRoutes.get('/login', login);

export default authRoutes;