import { Request, Response } from 'express';
import User from '../models/User.model';


const getUser = async (req: Request, res: Response) => {
    const {username} = req.params

    const user = await User.findOne({where:{username:username}})
    res.status(200).json(user)
}

const createUser = (req: Request, res: Response) => {
    const { username } = req.body;
    const newUser = User.create({ username })
    res.status(201).json(newUser)
}


export { createUser, getUser };