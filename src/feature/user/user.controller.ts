import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import { ICreateUser } from '../../config/db/schema/user.schema';
import { db } from '../../config/db/db';
import { IUpdateUserDto } from './dto/user.dto';
export const UserController = {
    createUser: async (req: Request, res: Response) => {
        try {
            const user = await UserService.createUser(req.body as ICreateUser, res, db);
            res.status(201).json({ message: "User Create Success", id: user });
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ error: err instanceof Error ? err.message : 'An unknown error occurred' });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    },
    updateUser: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userID = req.params.id;
            const { name, email, avatar, password } = req.body as IUpdateUserDto
            await UserService.updateUser(userID, { name, email, avatar, password });
            res.status(200).json({ message: "User Update Success" });
        } catch (err) {
            return next(err);
        }
    },
    getAllUsers: async (req: Request, res: Response) => {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    },
    getUserById: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await UserService.getUserById(req.params.id);
            res.status(200).json(user);
        } catch (err) {
            return next(err);
        }
    },
}