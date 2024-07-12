import jwt from "jsonwebtoken";
import { Secret } from "../configs/Port.config.js";
const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, Secret, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, //prevent XSS attack cross-site scripting attack
    sameSite: "strict",
  });
};
export default generateTokenAndSetCookie;
