import { db } from "../config/db.js";

export interface CreateUserDTO {
    name: string;
    age: number;
    email: string;
}

export interface User extends CreateUserDTO {
    id: number;
}


export class UserModel{
  static async findAll(){
    const [rows] = await db.query("SELECT * FROM users");
    return rows;
  }

  static async findUserById(id: number){
    const [rows]: any = await db.query(
      "SELECT * FROM users WHERE id = ?", [id]
    );
    return rows[0];
  }

  static  async create(user: CreateUserDTO) {
    const [result]: any  = await db.query(
      "INSERT INTO users (name, age,email) VALUES (?,?,?)", [
        user.name, user.age, user.email
      ]
    );
    return result.insertId
  }

  static async update(id: number, user: CreateUserDTO) {
    const [result]: any = await db.query(
      "UPDATE users SET name=?,age=?,email=? WHERE id=?", [
        user.name, user.age, user.email, id
      ]
    );
    return result.affectedRows;
  }

  static async delete(id: number){
    const [result]: any = await db.query(
      "DELETE FROM users WHERE id=?", [id]
    );
    return result.affectedRows;
  }
}