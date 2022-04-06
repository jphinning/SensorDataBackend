"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SensorController_1 = require("../controllers/SensorController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const sensorRouter = (0, express_1.Router)();
sensorRouter.post("/", new SensorController_1.SensorController().createData);
sensorRouter.get("/", authMiddleware_1.authMiddleware, new SensorController_1.SensorController().getAllData);
exports.default = sensorRouter;
//# sourceMappingURL=sensorRouter.js.map