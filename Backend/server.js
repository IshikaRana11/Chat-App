import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import authRoute from "./Routes/auth.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoute from "./Routes/Message.routes.js";
import userRoute from "./Routes/user.route.js";
import { app, server } from "./socket/socket.js";
import { PORT } from "./configs/Port.config.js";

const __dirname = path.resolve();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server started at ${PORT}`);
});
