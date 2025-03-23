import { ClientsService } from "./clients.service";
import { ClientsGateway } from "./clients.gateway";
import { Node } from "./entities/node.entity";
export declare class ClientsMqttController {
    private clientsService;
    private clientsGateway;
    constructor(clientsService: ClientsService, clientsGateway: ClientsGateway);
    handleMqttMessage(payload: Node): Promise<void>;
}
