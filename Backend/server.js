import express from "express";
import cookieParser from "cookie-parser";

import authRoute from "./Routes/auth.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoute from "./Routes/Message.routes.js";
import userRoute from "./Routes/user.route.js";

import { PORT } from "./configs/Port.config.js";
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server started at ${PORT}`);
});
