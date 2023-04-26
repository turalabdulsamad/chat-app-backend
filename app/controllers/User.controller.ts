import { Request, Response } from 'express';
import User from '../models/User.model';
import WebSocket from 'ws';
import * as userService from '../service/User.service';
import * as messageService from '../service/Message.service'


const getUser = async (req: Request, res: Response) => {
    const { username } = req.params

    const user = await User.findOne({ where: { username: username } })
    res.status(200).json(user)
}

const createUser = async (req: Request, res: Response) => {
    const { username } = req.body;

    const ws = new WebSocket('ws://localhost:3002', {
        perMessageDeflate: false
    });

    const message = `${username} joined Hatuna`

    ws.addEventListener("open", (w) => {
        console.log("salam")
        ws.send(message)
    })

    messageService.createMessage(message, username)

    const newUser = User.create({ username })
    res.status(201).json(newUser)
}

const getAllUsers = async (req: Request, res: Response) => {
    const users = await userService.getAllUsers()
    return res.status(200).json(users)
}

export { createUser, getUser, getAllUsers };