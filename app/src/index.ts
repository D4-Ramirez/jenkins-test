import express, { Application } from "express";
import * as dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import cors from "cors";

import router from "./routes/product-routes";

import "./config/database";

const app: Application = express();


dotenv.config({
  path: path.join(__dirname, "..") + '/.env'
});

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/products", router);

app.set("port", process.env.SERVER_PORT || "4000");
app.listen(app.get("port"), () => {
  console.log("💻 Server running on port:", app.get("port"));
});

export default app;
