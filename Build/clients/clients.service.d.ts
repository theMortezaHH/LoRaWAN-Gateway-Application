import { Node } from "./entities/node.entity";
import { Server, Socket } from "socket.io";
export declare class ClientsService {
    private logger;
    private client;
    constructor();
    afterInit(server: Server): Promise<void>;
    handleConnection(client: Socket): Promise<void>;
    handleDisconnect(client: Socket): Promise<void>;
    handleUpdateNode(client: Socket, payload: Node): Promise<Node>;
    handleMqttMessage(payload: Node): Promise<Node>;
}
