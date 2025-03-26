import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
    user?: any;
}

export const Authentication = (req: AuthRequest, res: Response, next: NextFunction) => {
    let token;

    // Check if token is in the Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }
    // Check if token is stored in cookies
    else if (req.cookies?.token) {
        token = req.cookies.token;
    }

    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }

    try {
        const secretKey = process.env.SECRET_KEY;
        console.log(secretKey);
        if (!secretKey) {
            throw new Error("JWT_SECRET is not defined");
        }

        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Not authorized, invalid token" });
    }
};
