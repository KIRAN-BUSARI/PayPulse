import express from "express";
import morgan from "morgan"
import rootRoutes from "./routes/user.routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan("dev"))

app.use("/api/v1", rootRoutes)

export default app;