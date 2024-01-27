import express from "express";
import morgan from "morgan"
import userRoutes from "./routes/user.routes.js";
import accountRoutes from "./routes/account.routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan("dev"));

app.use("/api/v1/user", userRoutes);
app.use('/api/v1/accounts', accountRoutes);

export default app;