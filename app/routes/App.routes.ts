import express from "express"
import { createUser, getAllUsers, getUser } from "../controllers/User.controller";
import getMessagesByUsername from "../controllers/Message.controller";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("TypeScript With Express");
});

router.get('/users/:username', getUser);
router.get('/users', getAllUsers)
router.post('/users', createUser);
router.get('/messages/:username', getMessagesByUsername);

export default router;