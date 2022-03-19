import { getRepository } from "typeorm";
import { UserEntity } from "../entities/UserEntity";

export interface IUserPayload {
  email: string;
  password: string;
}

export class UserRepositoty {
  public async createUser(payload: IUserPayload): Promise<UserEntity> {
    const userRepo = getRepository(UserEntity);
    const user = new UserEntity();

    return await userRepo.save({ ...user, ...payload });
  }
}
