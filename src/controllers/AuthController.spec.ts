import { Connection } from "typeorm";
import request from "supertest";

import app from "../app";
import { createTestingConnection } from "../utils/dbConnection";
import { IAuthPayload } from "./AuthController";

describe("Register User test", () => {
  const payload: IAuthPayload = {
    email: "test@test.com",
    password: "test",
  };

  let connection: Connection;

  beforeAll(async () => {
    try {
      connection = await createTestingConnection();
      console.log("Connection ok");
    } catch (error) {
      console.log(error);
    }
  }, 10000);

  afterAll(() => connection.close());

  it("should be able to create a new user", async () => {
    const res = await request(app).post("/register").send(payload).expect(200);
    await request(app).post("/login").send(payload).expect(200);
    console.log(res.body);
  }, 10000);
});
