import { Sequelize } from "sequelize";
import dotenv from "dotenv";


dotenv.config();

const db = new Sequelize("chatdb", "postgres", process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
})

const testDbConnection = async () => {
    try {
        await db.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

export { db, testDbConnection };

