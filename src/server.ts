// Application
import app from "./app";

// TypeORM
import { createServerConnection } from "./utils/dbConnection";

const PORT = process.env.PORT || 4000;

const start = async (): Promise<void> => {
  await createServerConnection();

  app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`);
  });
};

if (process.env.NODE_ENV !== "test") start();
