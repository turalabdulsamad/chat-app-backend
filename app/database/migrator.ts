import Message from "../models/Message.model"
import User from "../models/User.model"


const dbMigrator = () => {
    User.sync().then(() => {
        console.log("User model synched")
    })
    Message.sync().then(() => {
        console.log("Message model syched")
    })
}

export default dbMigrator;