import { Router } from "express";

import { SensorController } from "../controllers/SensorController";
import { authMiddleware } from "../middleware/authMiddleware";

const sensorRouter = Router();

sensorRouter.post("/", new SensorController().createData);
sensorRouter.get("/", authMiddleware, new SensorController().getAllData);

export default sensorRouter;
