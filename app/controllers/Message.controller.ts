import { Request, Response } from 'express';
import * as  messageService from "../service/Message.service"

const getMessagesByUsername = async (req: Request, res: Response) => {
    const { username } = req.params;

    const messages = await messageService.getMessagesByUsername(username);

    return res.status(200).json(messages)
}

const getDirectMessages = async (req: Request, res: Response) => {
    const { from, to } = req.body;

    const messages = await messageService.getDirectMessages(from, to);

    return res.status(200).json(messages)
}

export {getMessagesByUsername,getDirectMessages};