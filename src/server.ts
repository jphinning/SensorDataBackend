// Application
import app from "./app";

// TypeORM
import "reflect-metadata";
import { createConnection } from "typeorm";
import dbConfig from "./config/database";

const PORT = process.env.PORT || 4000;

createConnection(dbConfig)
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    })
  })
  .catch(err => {
    console.error(err);
  });
