import { Injectable } from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";

import { User } from "./schema/user.schema";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async getUserById(userId: string): Promise<User> {
        return this.userRepository.findOne({ userId })
    }

    async getUsers(): Promise<User[]> {
        return this.userRepository.find({});
    }
}