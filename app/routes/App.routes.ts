import express from "express"
import createUser from "../controllers/User.controller";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("TypeScript With Express");
});

router.post('/users', createUser)

export default router;