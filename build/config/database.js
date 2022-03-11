"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DB || 'data',
    entities: ["build/entities/*.js"],
    migrations: ["build/migrations/*.js"],
    synchronize: false,
};
exports.default = config;
//# sourceMappingURL=database.js.map