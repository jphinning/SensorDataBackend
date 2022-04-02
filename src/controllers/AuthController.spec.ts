import { createConnection } from "typeorm";
import { AuthController, IAuthPayload } from "./AuthController";

describe("Register User test", () => {
  const payload: IAuthPayload = {
    email: "test@test.com",
    password: "test",
  };

  beforeAll(async () => {
    try {
      await createConnection();
    } catch (error) {
      console.log(error);
    }
  });

  it("shouldn't be able to auth an unexisting user", async () => {
    const response = await new AuthController().createToken(payload);
    expect(response).toStrictEqual({ message: "Wrong user" });
  });
});
