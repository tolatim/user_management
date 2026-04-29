import { Request, Response } from "express";
import { UserService } from "../services/user.service.js";

export class UserController{
    async getAll(req: Request, res: Response){
        const users = await UserService.getAll();
        res.json(users);
    }
    async getByID(req: Request, res: Response){
        const user = await UserService.getByID(Number(req.params.id));
        res.json(user)
    }
    async create(req: Request, res: Response) {
        const result = await UserService.create(req.body)
        res.json(result);
    }
    async update(req: Request, res: Response) {
        const result = await UserService.update(Number(req.params.id), req.body);
        res.json(result)
    }
    async delete(req: Request, res: Response) {
        const result = await UserService.delete(Number(req.params.id));
        res.json(result)
    }
}
