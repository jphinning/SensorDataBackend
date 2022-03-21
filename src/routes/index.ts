import { Router } from "express";

import registerRouter from "./registerRouter";
import authRouter from "./authRouter";

const router = Router();

router.use("/register", registerRouter);
router.use("/login", authRouter);

export default router;
