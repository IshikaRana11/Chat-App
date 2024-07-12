import mongoose from "mongoose";
import { Mongo_Db_URI } from "../configs/Port.config.js";
const connectToMongoDB = async () => {
  mongoose
    .connect(Mongo_Db_URI)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.error("Database connection error:", error);
    });
};
export default connectToMongoDB;
