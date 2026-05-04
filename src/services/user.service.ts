import { UserModel, CreateUserDTO } from "../models/user.model.js";

export class UserService {
    static async getAll() {
        return await UserModel.findAll();
    }

    static async getById(id: number) {
        const user = await UserModel.findUserById(id);

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    }

    static async create(user: CreateUserDTO) {
        const id = await UserModel.create(user);

        return {
            id,
            ...user
        };
    }

    static async update(id: number, user: CreateUserDTO) {
        const affected = await UserModel.update(id, user);

        if (affected === 0) {
            throw new Error("User not found");
        }

        return true;
    }

    static async delete(id: number) {
        const affected = await UserModel.delete(id);

        if (affected === 0) {
            throw new Error("User not found");
        }

        return true;
    }
}