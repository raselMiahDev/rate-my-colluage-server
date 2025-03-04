import { Request, Response } from 'express';
import pool from '../../config/db/database';
export const UserController = {

    getUsers: async (req: Request, res: Response) => {
        try {
            const [rows] = await pool.query('SELECT * FROM basicinfo');
            res.json(rows);
        } catch (err) {
            res.status(500).json({ message: "error" });
        }
    }
}