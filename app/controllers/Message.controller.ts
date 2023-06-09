import { Request, Response } from 'express';
import * as  messageService from "../service/Message.service"
import *  as userService from '../service/User.service';

const getLatestMessageByUsername = async (req: Request, res: Response) => {
    const { username } = req.params;

    const users = await userService.getAllUsers()

    const messages = await Promise.all(users.map(async (user) => {

        let message = await messageService.getLatestMessagesByUsername(username,
            user.dataValues.username)

        return message
    }))

    return res.status(200).json(messages)
}

const getDirectMessages = async (req: Request, res: Response) => {
    const { from, to } = req.body;

    const messages = await messageService.getDirectMessages(from, to);

    return res.status(200).json(messages)
}

const sendMessage = async (req: Request, res: Response) => {
    const { me, to, message } = req.body
    messageService.sendMessage(me, to, message)
}

export { getLatestMessageByUsername, getDirectMessages, sendMessage };