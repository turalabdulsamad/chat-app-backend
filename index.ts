// Import the express in typescript file
import express from 'express';
import testRouter from "./app/routes/App.routes"
import { createServer } from "http";
import createWebSocketServer from './app/routes/WS.routes';

const app = express();
const server = createServer(app)

const port: number = 3000;

app.use("/", testRouter);
app.use(createWebSocketServer(server));

app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});

