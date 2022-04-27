import { Router } from "express";

import { authMiddleware } from "../middleware/authMiddleware";
import { AuthController } from "../controllers/AuthController";

const authRouter = Router();

authRouter.post("/", async (req, res) => {
  try {
    const controller = new AuthController();

    const response = await controller.createToken(req.body);

    // Error handling
    const { message } = response;

    if (message) {
      return res.status(409).json({ message: "Wrong user or password" });
    }

    return res.json(response);
  } catch (error) {
    console.log(error);
    return res.send({ error: error });
  }
});

authRouter.get("/", authMiddleware, async (req, res) => {
  return res.send(req.userToken);
});

export default authRouter;
