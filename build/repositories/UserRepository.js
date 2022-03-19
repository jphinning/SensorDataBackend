"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoty = void 0;
const typeorm_1 = require("typeorm");
const UserEntity_1 = require("../entities/UserEntity");
class UserRepositoty {
    async createUser(payload) {
        const userRepo = (0, typeorm_1.getRepository)(UserEntity_1.UserEntity);
        const user = new UserEntity_1.UserEntity();
        return await userRepo.save(Object.assign(Object.assign({}, user), payload));
    }
}
exports.UserRepositoty = UserRepositoty;
//# sourceMappingURL=UserRepository.js.map