// Application
import app from "./app";

// TypeORM
import "reflect-metadata";
import { createConnection } from "typeorm";

const PORT = process.env.PORT || 4000;

createConnection()
  .then(async (connection) => {
    await connection.runMigrations();
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
