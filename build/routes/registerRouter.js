"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const registerRouter = (0, express_1.Router)();
registerRouter.post("/", async (req, res) => {
    try {
        const controller = new UserController_1.UserController();
        const userExists = await controller.findOne(req.body);
        if (userExists) {
            return res.status(409).json({ message: "Email alreay in use" });
        }
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({ message: "Unable to create user" });
        }
        const response = await controller.createUser(req.body);
        return res.send(response);
    }
    catch (error) {
        return res.send({ error: error });
    }
});
exports.default = registerRouter;
//# sourceMappingURL=registerRouter.js.map