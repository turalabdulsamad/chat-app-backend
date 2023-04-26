import { DataTypes } from "sequelize"
import { db } from "../database/init"

const Message = db.define("message", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    from: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    to: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

export default Message;