// Application
import { Connection } from "typeorm";
import app from "./app";

// TypeORM
import { createDevConnection, createProdConn } from "./utils/dbConnection";

const PORT = process.env.PORT || 4000;

const start = async (
  dbConnection: () => Promise<Connection>
): Promise<void> => {
  try {
    console.log(process.env.NODE_ENV);
    await dbConnection();

    app.listen(PORT, () => {
      console.log(`Server running on: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

if (process.env.NODE_ENV === "dev") start(createDevConnection);
if (process.env.NODE_ENV === "prod") start(createProdConn);
