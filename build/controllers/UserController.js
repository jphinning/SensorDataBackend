"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserRepository_1 = require("../repositories/UserRepository");
class UserController {
    async createContact(body) {
        return await new UserRepository_1.UserRepositoty().createUser(body);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map