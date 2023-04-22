import express from "express"
import {createUser,getUser} from "../controllers/User.controller";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("TypeScript With Express");
});

router.get('/users/:username',getUser);
router.post('/users', createUser);

export default router;