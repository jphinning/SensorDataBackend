"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorController = void 0;
const typeorm_1 = require("typeorm");
const SensorEntity_1 = require("../entities/SensorEntity");
class SensorController {
    async createData(req, res) {
        const repository = (0, typeorm_1.getRepository)(SensorEntity_1.SensorEntity);
        const { data } = req.body;
        const sensorData = repository.create({ data });
        await repository.save(sensorData);
        return res.json(sensorData);
    }
    async getAllData(req, res) {
        const repository = (0, typeorm_1.getRepository)(SensorEntity_1.SensorEntity);
        const { limit, order } = req.query;
        const users = await repository.find({
            order: {
                id: order,
            },
            take: parseInt(limit),
        });
        return res.json(users);
    }
}
exports.SensorController = SensorController;
//# sourceMappingURL=SensorController.js.map