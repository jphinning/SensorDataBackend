"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const authController_1 = require("../controllers/authController");
const authRouter = (0, express_1.Router)();
authRouter.post("/", async (req, res) => {
    try {
        const controller = new authController_1.AuthController();
        const response = await controller.createToken(req.body);
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