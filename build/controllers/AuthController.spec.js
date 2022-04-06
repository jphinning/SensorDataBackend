"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const AuthController_1 = require("./AuthController");
describe("Register User test", () => {
    const payload = {
        email: "test@test.com",
        password: "test",
    };
    beforeAll(async () => {
        try {
            await (0, typeorm_1.createConnection)("testDB");
        }
        catch (error) {
            console.log(error);
        }
    });
    it("shouldn't be able to auth an unexisting user", async () => {
        const response = await new AuthController_1.AuthController().createToken(payload);
        expect(response).toStrictEqual({ message: "Wrong user" });
    });
});
//# sourceMappingURL=AuthController.spec.js.map