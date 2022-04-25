import { getRepository } from "typeorm";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { UserEntity } from "../entities/UserEntity";

export interface IAuthPayload {
  email: string;
  password: string;
}

export class AuthController {
  public async createToken(body: IAuthPayload) {
    const repository = getRepository(UserEntity);

    const { email, password } = body;

    const user = await repository.findOne({ where: { email } });

    if (!user) {
      return { message: "Wrong user" };
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return { message: "Wrong password" };
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      process.env.JWT_SECRET as string,
      { expiresIn: "10h" }
    );
    return { id: user.id, email: user.email, name: user.name, token: token };
  }
}
