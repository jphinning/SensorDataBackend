"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const dbConnection_1 = require("../utils/dbConnection");
describe("Register User test", () => {
    const payload = {
        email: "test@test.com",
        password: "test",
    };
    let connection;
    beforeAll(async () => {
        try {
            connection = await (0, dbConnection_1.createTestingConnection)();
            console.log("Connection ok");
        }
        catch (error) {
            console.log(error);
        }
    }, 10000);
    afterAll(() => connection.close());
    it("should be able to create a new user", async () => {
        const res = await (0, supertest_1.default)(app_1.default).post("/register").send(payload).expect(200);
        await (0, supertest_1.default)(app_1.default).post("/login").send(payload).expect(200);
        console.log(res.body);
    }, 10000);
});
//# sourceMappingURL=AuthController.spec.js.map