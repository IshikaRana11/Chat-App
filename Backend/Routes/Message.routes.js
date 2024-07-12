import { Router } from "express";
import { sendMessage } from "../controllers/Message.controllers.js";
import protectRoute from "../middlewares/protectRoute.js";
import { getMessage } from "../controllers/Message.controllers.js";
const router = Router();
router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);
export default router;
