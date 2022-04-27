"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const typeorm_1 = require("typeorm");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserEntity_1 = require("../entities/UserEntity");
class AuthController {
    async createToken(body) {
        const repository = (0, typeorm_1.getRepository)(UserEntity_1.UserEntity);
        const { email, password } = body;
        const user = await repository.findOne({ where: { email } });
        if (!user) {
            return { message: "Wrong user" };
        }
        const validPassword = await bcrypt_1.default.compare(password, user.password);
        if (!validPassword) {
            return { message: "Wrong password" };
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, name: user.name }, process.env.JWT_SECRET, { expiresIn: "10h" });
        return { id: user.id, email: user.email, name: user.name, token: token };
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=AuthController.js.map