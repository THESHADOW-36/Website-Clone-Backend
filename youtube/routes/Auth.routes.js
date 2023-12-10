import { Router } from "express";
import { Login, Register } from "../controllers/Auth.controllers.js";

const router = Router();

router.post("/login", Login)
router.post("/register", Register)

export default router;