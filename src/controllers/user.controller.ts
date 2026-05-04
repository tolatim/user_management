import { Request, Response } from "express";
import { UserService } from "../services/user.service.js";
import { BaseController } from "./base.controller.js";

export class UserController extends BaseController {

    async getAll(req: Request, res: Response) {
        try {
            const users = await UserService.getAll();
            return this.sendSuccess(res, users);
        } catch (err: any) {
            return this.sendError(res, err.message);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const user = await UserService.create(req.body);
            return this.sendSuccess(res, user, "User created");
        } catch (err: any) {
            return this.sendError(res, err.message);
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            if (isNaN(id)) {
                return this.sendError(res, "Invalid ID", 400);
            }

            const user = await UserService.getById(id);

            return this.sendSuccess(res, user, "User found");

        } catch (err: any) {
            const status = err.message === "User not found" ? 404 : 400;
            return this.sendError(res, err.message, status);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            if (isNaN(id)) {
                return this.sendError(res, "Invalid ID", 400);
            }

            const result = await UserService.update(id, req.body);

            return this.sendSuccess(res, result, "User updated successfully");

        } catch (err: any) {
            const status = err.message === "User not found" ? 404 : 400;

            return this.sendError(res, err.message, status);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if(isNaN(id)){
                return this.sendError(res, "Invalid ID", 400);
            }
            const result = await UserService.delete(id);
            return this.sendSuccess(res, result, "User deleted successfully");
        }catch(err: any) {
            const status = err.message ===  "User not found" ? 404: 400;

            return this.sendError(res, err.message, status);
        }
    }
}