import { Router } from "express";

import registerRouter from "./registerRouter";
import authRouter from "./authRouter";
import sensorRouter from "./sensorRouter";

const router = Router();

router.use("/register", registerRouter);
router.use("/login", authRouter);
router.use("/sensor-information", sensorRouter);

export default router;
