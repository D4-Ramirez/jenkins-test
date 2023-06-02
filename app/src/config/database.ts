import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/store")
  .then((db) => console.log("🟢 Database connected"))
  .catch((err) => console.error("🔴", err));
