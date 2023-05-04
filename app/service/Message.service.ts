import { v4 as uuidv4 } from 'uuid';
import sequelize from 'sequelize';

import Message from '../models/Message.model';
import *  as userService from '../service/User.service';
import LastMessage from '../models/LastMessage.model';


const createJoinMessage = async (message: String, username: String) => {
    const users = await userService.getAllUsers()
    users.map((user) => {
        Message.create({
            id: uuidv4(),
            "message": message,
            "from": username,
            "to": user.dataValues.username
        });
        LastMessage.create({
            id: uuidv4(),
            "message": message,
            "username1": username,
            "username2": user.dataValues.username
        });
    });
};

const createMessage = async (message: String, from: String, to: String) => {

    Message.create({
        id: uuidv4(),
        "message": message, "from": from,
        "to": to
    });
};

const getLatestMessagesByUsername = async (to: String, from: String) => {
    const Op = sequelize.Op;

    const messages = await LastMessage.findAll({
        where: {
            [Op.or]: [
                {
                    "username1": from,
                    "username2": to,
                },
                {
                    "username1": to,
                    "username2": from,
                },
            ]
        }
    })

    if (messages[0]) {
        return messages[0]
    }
}

const getDirectMessages = async (from: String, to: String) => {
    const Op = sequelize.Op;

    const messages = await Message.findAll({
        where: {
            [Op.or]: [
                {
                    "from": from,
                    "to": to,
                },
                {
                    "from": to,
                    "to": from,
                },
            ]
        }
    })
    return messages
}

const sendMessage = (from: String, to: String, message: String) => {
    createMessage(message, from, to)
    updateLatestMessage(message, from, to)
}

const updateLatestMessage = async (message: String, from: String, to: String) => {
    const Op = sequelize.Op;

    await LastMessage.update({ "username1": from, "username2": to, "message": message },
        {
            where: {
                [Op.or]: [
                    {
                        "username1": from,
                        "username2": to,
                    },
                    {
                        "username1": to,
                        "username2": from,
                    },
                ]
            }
        })
}

export { createJoinMessage, getLatestMessagesByUsername, getDirectMessages, sendMessage }