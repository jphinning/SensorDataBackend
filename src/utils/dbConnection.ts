// TypeORM
import "dotenv/config";
import "reflect-metadata";
import { Connection, ConnectionOptions, createConnection } from "typeorm";

const { POSTGRES_HOST, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } =
  process.env;

const createDbConnection = async (
  options: ConnectionOptions
): Promise<Connection> => {
  try {
    const connection: Connection = await createConnection(options);
    console.log(`TypeORM Connected to ${options.database}`);

    await connection.runMigrations();
    console.log("TypeORM runMigrations() COMPLETE.");

    return connection;
  } catch (err) {
    console.log("Problem with TypeORM connection, check Postgres docker-up");
    throw err.message;
  }
};

export const createDevConnection = (): Promise<Connection> =>
  createDbConnection({
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

export const createProdConn = (): Promise<Connection> =>
  createDbConnection({
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

export const createTestingConnection = (): Promise<Connection> =>
  createDbConnection({
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
