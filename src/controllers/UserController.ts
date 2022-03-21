import { getRepository } from "typeorm";

import { UserEntity } from "../entities/UserEntity";

interface IUserPayload {
  email: string;
  password: string;
}

export class UserController {
  public async createUser(body: IUserPayload): Promise<UserEntity> {
    const repository = getRepository(UserEntity);

    const user = repository.create(body);
    return await repository.save(user);
  }

  public async findOne(body: IUserPayload): Promise<UserEntity | undefined> {
    const repository = getRepository(UserEntity);
    const { email } = body;

    return await repository.findOne({ where: { email } });
  }
}
