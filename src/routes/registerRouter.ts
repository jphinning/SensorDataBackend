import { Router } from "express";
import bcrypt from "bcrypt";

import { UserController } from "../controllers/UserController";

const registerRouter = Router();

registerRouter.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);

    const controller = new UserController();

    const response = await controller.createContact({
      email: email,
      password: passwordHash,
    });
    return res.send(response);
  } catch (error) {
    return res.send({ error: error });
  }
});

export default registerRouter;
