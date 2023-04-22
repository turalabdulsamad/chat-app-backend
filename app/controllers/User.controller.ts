import { Request, Response } from 'express';

const createUser = (req: Request, res: Response) => {
    const { username } = req.body;
    res.status(201).json({ "message": "user created"})
}

export default createUser;