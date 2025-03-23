"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let nodes = [
    {
        nodeId: 12345,
        state: true,
        nodeName: "Test Node 1",
    },
    {
        nodeId: 12346,
        state: false,
        nodeName: "Test Node 2",
    },
];
let ClientsService = class ClientsService {
    logger = new common_2.Logger("ClientsGateway");
    client;
    constructor() {
        this.client = microservices_1.ClientProxyFactory.create({
            transport: microservices_1.Transport.MQTT,
            options: {
                url: "mqtt://localhost:1883",
            },
        });
    }
    async afterInit(server) {
        this.logger.log("Init");
    }
    async handleConnection(client) {
        this.logger.log(`Client connected: ${client.id}`);
        client.emit("updateClient", nodes);
    }
    async handleDisconnect(client) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }
    async handleUpdateNode(client, payload) {
        this.logger.log(`Received updateNode: ${JSON.stringify(payload)} from ${client.id}`);
        nodes = nodes.map((node) => {
            if (node.nodeId === payload.nodeId) {
                return payload;
            }
            return node;
        });
        this.client.emit("gateway/nodes", payload);
        return payload;
    }
    async handleMqttMessage(payload) {
        this.logger.log("Received MQTT data:", payload);
        nodes = nodes.map((node) => {
            if (node.nodeId === payload.nodeId) {
                return payload;
            }
            return node;
        });
        return payload;
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ClientsService);
//# sourceMappingURL=clients.service.js.map