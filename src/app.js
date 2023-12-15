import bodyParser from "body-parser";
import express from "express";
import UserRouter from "./routes/userRoutes.js";
import CardRouter from "./routes/cardRoutes.js";
const app = express();
import "./config/db.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/users", UserRouter);
app.use("/api/v1/cards", CardRouter);
export default app;
