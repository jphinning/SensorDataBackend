import { Router } from "express";

import { UserController } from "../controllers/UserController";

const registerRouter = Router();

registerRouter.post("/", async (req, res) => {
  try {
    const controller = new UserController();

    const userExists = await controller.findOne(req.body);

    if (userExists) {
      return res.status(409).json({ message: "Email alreay in use" });
    }

    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ message: "Unable to create user" });
    }

    const response = await controller.createUser(req.body);
    return res.send(response);
  } catch (error) {
    return res.send({ error: error });
  }
});

export default registerRouter;
