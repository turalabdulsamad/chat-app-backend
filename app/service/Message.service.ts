import { v4 as uuidv4 } from 'uuid';
import sequelize from 'sequelize';

import Message from '../models/Message.model';
import *  as userService from '../service/User.service';


const createMessage = async (message: String, username: String) => {
    const users = await userService.getAllUsers()
    users.map((user) => {
        Message.create({
            id: uuidv4(),
            "message": message, "from": username,
            "to": user.dataValues.username
        });
    });
};

const getMessagesByUsername = async (username: String) => {
    const messages = await Message.findAll({
        where: {
            "to": username
        }
    })

    return messages
}

export { createMessage, getMessagesByUsername }