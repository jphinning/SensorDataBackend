"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordHasher = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class PasswordHasher {
    constructor() {
        this.saltRounds = 10;
    }
    async encrypt({ password }) {
        try {
            return await bcrypt_1.default.hash(password, this.saltRounds);
        }
        catch (error) {
            return error;
        }
    }
}
exports.PasswordHasher = PasswordHasher;
//# sourceMappingURL=PasswordHasher.js.map