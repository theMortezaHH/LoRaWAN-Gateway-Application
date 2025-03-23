import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { ClientsService } from "./clients.service";
import { Node } from "./entities/node.entity";
export declare class ClientsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private clientsService;
    server: Server;
    constructor(clientsService: ClientsService);
    afterInit(server: Server): Promise<void>;
    handleConnection(client: Socket): Promise<void>;
    handleDisconnect(client: Socket): Promise<void>;
    handleUpdateNode(client: Socket, payload: Node): Promise<void>;
}
