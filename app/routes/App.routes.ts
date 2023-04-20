import express from "express"

const router = express.Router();

router.get('/', (req, res) => {
    res.send("TypeScript With Express");
});

export default router;