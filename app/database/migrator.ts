import User from "../models/User.model"

const dbMigrator = () => {
    User.sync().then(() => {
        console.log("User model synched")
    })
}

export default dbMigrator;