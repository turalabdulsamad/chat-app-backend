import WebSocket from 'ws';
import { Server } from 'http';


const createWebSocketServer = (server: Server) => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', function connection(ws) {
        console.log("A new client Connected!")
        ws.send("Welcome New Client!")

        ws.on('message', function incoming(message) {
            console.log("received: %s", message)
            wss.clients.forEach(function each(client) {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            })
        });
    });

    return function websocketMiddleware(req: any, res: any, next: any) {
        // Make sure to set the headers to allow WebSocket connections
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

        // Upgrade the connection to a WebSocket connection
        if (req.headers.upgrade && req.headers.upgrade.toLowerCase() === 'websocket') {
            wss.handleUpgrade(req, req.socket, Buffer.alloc(0), function done(ws) {
                wss.emit('connection', ws, req);
            });
        } else {
            next();
        }
    };
}


export default createWebSocketServer;