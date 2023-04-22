import { DataTypes } from "sequelize"
import { db } from "../database/init"

const User = db.define("user", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    }
})

export default User;