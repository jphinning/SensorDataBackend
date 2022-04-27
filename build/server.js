"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dbConnection_1 = require("./utils/dbConnection");
const PORT = process.env.PORT || 4000;
const start = async (dbConnection) => {
    try {
        console.log(process.env.NODE_ENV);
        await dbConnection();
        app_1.default.listen(PORT, () => {
            console.log(`Server running on: ${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
if (process.env.NODE_ENV === "dev")
    start(dbConnection_1.createDevConnection);
if (process.env.NODE_ENV === "prod")
    start(dbConnection_1.createProdConn);
//# sourceMappingURL=server.js.map