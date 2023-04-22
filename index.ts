// Import the express in typescript file
import express from 'express';
import { createServer } from "http";
import bodyParser from 'body-parser';
import cors from "cors";

import appRouter from "./app/routes/App.routes"
import createWebSocketServer from './app/routes/WS.routes';
import dbMigrator from './app/database/migrator';

dbMigrator()

const app = express();
const server = createServer(app)

const port: number = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use("/", appRouter);
app.use(createWebSocketServer(server));

app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});

