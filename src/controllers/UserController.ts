import { UserEntity } from "../entities/UserEntity";
import { UserRepositoty, IUserPayload } from "../repositories/UserRepository";

export class UserController {
  public async createContact(body: IUserPayload): Promise<UserEntity> {
    return await new UserRepositoty().createUser(body);
  }
}
