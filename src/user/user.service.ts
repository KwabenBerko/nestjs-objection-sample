import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
constructor(@Inject(User) private readonly userModel: typeof User){}

  async getUsers(): Promise< User[]> {
    return await this.userModel.query()
  }
}
