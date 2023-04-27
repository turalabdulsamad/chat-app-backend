import express from "express"
import { createUser, getAllUsers, getUser } from "../controllers/User.controller";
import {getMessagesByUsername,getDirectMessages} from "../controllers/Message.controller";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("TypeScript With Express");
});

router.get('/users/:username', getUser);
router.get('/users', getAllUsers)
router.post('/users', createUser);
router.get('/messages/:username', getMessagesByUsername);
router.get('/messages',getDirectMessages);

export default router;