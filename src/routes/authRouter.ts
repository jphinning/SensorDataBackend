import { Router } from "express";

import { authMiddleware } from "../middleware/authMiddleware";
import { AuthController } from "../controllers/authController";

const authRouter = Router();

authRouter.post("/", async (req, res) => {
  try {
    const controller = new AuthController();

    const response = await controller.createToken(req.body);

    return res.json(response);
  } catch (error) {
    return res.send({ error: error });
  }
});

authRouter.get("/", authMiddleware, async (req, res) => {
  return res.send(req.userToken);
});

export default authRouter;
