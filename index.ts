// Import the express in typescript file
import express from 'express';
import { createServer } from "http";
import bodyParser from 'body-parser';
import cors from "cors";
import WebSocket from 'ws';

import appRouter from "./app/routes/App.routes"
import dbMigrator from './app/database/migrator';

dbMigrator()

const app = express();
export const server = createServer(app)

const port: number = 3001;

const wss = new WebSocket.Server({ port: 3002 });
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log("received: %s", message);

        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        })
    });
});

app.use(cors());
app.use(bodyParser.json());
app.use("/", appRouter);

app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});

