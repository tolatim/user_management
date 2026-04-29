import { db } from "../config/db.js";
import { User } from "../models/user.model.js";

export class UserService {
    static async getAll() {
        const [rows] = await db.query("SELECT * FROM users");
        return rows;
    }
    static async getByID(id: number) {
        const [rows]: any = await db.query("SELECT * FROM users WHERE id= ?", [id]);
        return rows;
    }
    static async create(user: User) {
        const [result]: any = await db.query(
            "INSERT INTO users (name, age, email) VALUES (?,?,?)", [user.name, user.age, user.email]
        );

        return {
            success: true,
            message: "User created successfully",
            data: {
                id: result.insertId,
                name: user.name,
                age: user.age,
                email: user.email,
            },
        };
    }
    static async update(id: number, user: User) {
        const [result]: any = await db.query(
            "UPDATE users SET name=?, age=?, email=? WHERE id=?",
            [user.name, user.age, user.email, id]
        );

        return {
            success: true,
            message: "User updated successfully",
            affectedRows: result.affectedRows,
        };
    }
    static async delete(id: number) {
        const [result]: any = await db.query(
            "DELETE FROM users WHERE id = ?",
            [id]
        );

        return {
            success: true,
            message: "User deleted successfully",
            affectedRows: result.affectedRows,
        };
    }
}