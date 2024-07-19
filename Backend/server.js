import express from "express";
import cookieParser from "cookie-parser";

import authRoute from "./Routes/auth.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoute from "./Routes/Message.routes.js";
import userRoute from "./Routes/user.route.js";
import { app, server } from "./socket/socket.js";
import { PORT } from "./configs/Port.config.js";

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server started at ${PORT}`);
});
