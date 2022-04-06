"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const AuthController_1 = require("../controllers/AuthController");
const authRouter = (0, express_1.Router)();
authRouter.post("/", async (req, res) => {
    try {
        const controller = new AuthController_1.AuthController();
        const response = await controller.createToken(req.body);
        const { message } = response;
        if (message) {
            return res.status(409).json({ message: "Wrong user or password" });
        }
        return res.json(response);
    }
    catch (error) {
        return res.send({ error: error });
    }
});
authRouter.get("/", authMiddleware_1.authMiddleware, async (req, res) => {
    return res.send(req.userToken);
});
exports.default = authRouter;
//# sourceMappingURL=authRouter.js.map