import { Request, Response } from 'express';
import { UserService } from './user.service';
import { ICreateUser } from '../../config/db/schema/user.schema';
import { db } from '../../config/db/db';
export const UserController = {
    createUser: async (req: Request, res: Response) => {
        try {
            const user = await UserService.createUser(req.body as ICreateUser, db);
            res.status(201).json({ message: "User Create Success", id: user });
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

}