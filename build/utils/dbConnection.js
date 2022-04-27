"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTestingConnection = exports.createProdConn = exports.createDevConnection = void 0;
require("dotenv/config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const { POSTGRES_HOST, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } = process.env;
const createDbConnection = async (options) => {
    try {
        const connection = await (0, typeorm_1.createConnection)(options);
        console.log(`TypeORM Connected to ${options.database}`);
        await connection.runMigrations();
        console.log("TypeORM runMigrations() COMPLETE.");
        return connection;
    }
    catch (err) {
        console.log("Problem with TypeORM connection, check Postgres docker-up");
        throw err.message;
    }
};
const createDevConnection = () => createDbConnection({
    type: "postgres",
    host: `${POSTGRES_HOST}`,
    username: `${POSTGRES_USER}`,
    password: `${POSTGRES_PASSWORD}`,
    database: "app",
    entities: ["src/entities/**/*{.js,.ts}"],
    migrations: ["src/migrations/**/*{.js,.ts}"],
    subscribers: ["src/subscribers/**/*{.js,.ts}"],
    synchronize: false,
    cli: {
        entitiesDir: "src/entities",
        migrationsDir: "src/migrations",
    },
});
exports.createDevConnection = createDevConnection;
const createProdConn = () => createDbConnection({
    type: "postgres",
    host: `${POSTGRES_HOST}`,
    username: `${POSTGRES_USER}`,
    password: `${POSTGRES_PASSWORD}`,
    database: `${POSTGRES_DB}`,
    entities: ["build/entities/**/*{.js,.ts}"],
    migrations: ["build/migrations/**/*{.js,.ts}"],
    subscribers: ["build/subscribers/**/*{.js,.ts}"],
    synchronize: false,
    cli: {
        entitiesDir: "build/entities",
        migrationsDir: "build/migrations",
    },
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});
exports.createProdConn = createProdConn;
const createTestingConnection = () => createDbConnection({
    type: "postgres",
    host: `${POSTGRES_HOST}`,
    username: `${POSTGRES_USER}`,
    password: `${POSTGRES_PASSWORD}`,
    database: "app_test",
    entities: ["src/entities/**/*{.js,.ts}"],
    migrations: ["src/migrations/**/*{.js,.ts}"],
    subscribers: ["src/subscribers/**/*{.js,.ts}"],
    synchronize: false,
    cli: {
        entitiesDir: "src/entities",
        migrationsDir: "src/migrations",
    },
});
exports.createTestingConnection = createTestingConnection;
//# sourceMappingURL=dbConnection.js.map