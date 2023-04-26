import User from "../models/User.model"

const getAllUsers = async () => {
    return await User.findAll()
}

export {getAllUsers};    