import Message from "../models/Message.model"
import User from "../models/User.model"
import LastMessage from "../models/LastMessage.model"


const dbMigrator = () => {
    User.sync().then(() => {
        console.log("User model synched")
    })
    Message.sync().then(() => {
        console.log("Message model syched")
    })
    LastMessage.sync().then(() =>{
        console.log("Last Message model synched")
    })
}

export default dbMigrator;