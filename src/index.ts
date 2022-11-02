import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { tasksRoutes } from "./routes/tasks.routes";
import { userRoutes } from "./routes/user.routes";

const port = process.env.PORT || 3000;

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/tasks", tasksRoutes);
app.use("/user", userRoutes);
app.use("/", userRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("API rodando na porta " + process.env.PORT);
});
