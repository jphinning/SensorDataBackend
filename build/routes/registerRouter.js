"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PasswordHasher_1 = require("../utils/PasswordHasher");
const UserController_1 = require("../controllers/UserController");
const registerRouter = (0, express_1.Router)();
registerRouter.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(password);
        const passwordHash = await new PasswordHasher_1.PasswordHasher().encrypt(password);
        const controller = new UserController_1.UserController();
        const response = await controller.createContact({
            email: email,
            password: passwordHash,
        });
        return res.send(response);
    }
    catch (error) {
        return res.send({ error: error });
    }
});
exports.default = registerRouter;
//# sourceMappingURL=registerRouter.js.map