// Application
import app from "./app";

// TypeORM
import "reflect-metadata";
import { createConnection } from "typeorm";

const PORT = process.env.PORT || 4000;

createConnection()
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
