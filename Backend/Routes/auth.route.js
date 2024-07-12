import express, { Router } from "express";
const router = express.Router();
import {
  signupUser,
  loginUser,
  logoutUser,
} from "../controllers/auth.controllers.js";
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/signup", signupUser);
export default router;
