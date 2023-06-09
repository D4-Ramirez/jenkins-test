import mongoose from "mongoose";

const MONGO_DEFAULT_URL="mongodb://127.0.0.1:27017/store"

mongoose
  .set('strictQuery', false)
  .connect(process.env.MONGO_URL || MONGO_DEFAULT_URL)
  .then((db) => console.log("🟢 Database connected"))
  .catch((err) => console.error("🔴", err));
