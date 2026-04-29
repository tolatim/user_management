import express from "express";
import {UserController} from "../controllers/user.controller.js";

const userController = new UserController();

const router = express.Router();

router.get('/', userController.getAll)
router.get('/:id', userController.getByID)
router.post('/', userController.create)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

export default router;