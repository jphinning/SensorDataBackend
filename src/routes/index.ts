import { Router } from "express";

import registerRouter from "./registerRouter";

const router = Router();

router.use("/register", registerRouter);

export default router;
