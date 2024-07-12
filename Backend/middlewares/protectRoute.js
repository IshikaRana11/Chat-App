import jwt from "jsonwebtoken";
import { Secret } from "../configs/Port.config.js";
import User from "../models/user.model.js";
const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "unauthorized-No token provided" });
    }
    const decoded = jwt.verify(token, Secret);
    if (!decoded) {
      return res.status(401).json({ error: "unauthorized -Invalid token" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ error: "user not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("error in protectionRoute middleware:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export default protectRoute;
