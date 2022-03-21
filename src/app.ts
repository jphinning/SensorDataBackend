import "dotenv/config";
import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes";
import helmet from "helmet";

const app: Application = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use(router);

export default app;
