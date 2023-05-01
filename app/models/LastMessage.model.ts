import { DataTypes } from "sequelize"
import { db } from "../database/init"


const LastMessage = db.define("last_messages", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username2: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

export default LastMessage;