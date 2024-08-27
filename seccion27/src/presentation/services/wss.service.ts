import { Server } from 'http';
import { WebSocket, WebSocketServer} from 'ws';

interface Options {
    server : Server;
    path? : string; // ws
}

export class WssService {
    private static _instance : WssService;
    private wss : WebSocketServer;

    private constructor(options : Options){
        const { server, path = '/ws' } = options; // ws://localhost:3000/ws

        this.wss = new WebSocketServer({ server, path });
        this.start();
    }

    public static get instance() : WssService {
      
        return WssService._instance;
    }

    public static initWss(options : Options){
        WssService._instance = new WssService(options);
    }

    public start(){
        this.wss.on('connection', (ws : WebSocket) => {
            console.log('Client connected');

            ws.on('close', () => console.log('Client disconnected'));
        });
    }
}