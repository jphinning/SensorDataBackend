"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const database_1 = __importDefault(require("./config/database"));
const PORT = process.env.PORT || 4000;
(0, typeorm_1.createConnection)(database_1.default)
    .then((_connection) => {
    app_1.default.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    });
})
    .catch(err => {
    console.error(err);
});
//# sourceMappingURL=server.js.map