"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const typeorm_1 = require("typeorm");
const UserEntity_1 = require("../entities/UserEntity");
class UserController {
    async createUser(body) {
        const repository = (0, typeorm_1.getRepository)(UserEntity_1.UserEntity);
        const user = repository.create(body);
        return await repository.save(user);
    }
    async findOne(body) {
        const repository = (0, typeorm_1.getRepository)(UserEntity_1.UserEntity);
        const { email } = body;
        return await repository.findOne({ where: { email } });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map