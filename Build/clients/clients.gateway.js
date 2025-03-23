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
exports.ClientsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const clients_service_1 = require("./clients.service");
const node_entity_1 = require("./entities/node.entity");
let ClientsGateway = class ClientsGateway {
    clientsService;
    server;
    constructor(clientsService) {
        this.clientsService = clientsService;
    }
    async afterInit(server) {
        await this.clientsService.afterInit(server);
    }
    async handleConnection(client) {
        await this.clientsService.handleConnection(client);
    }
    async handleDisconnect(client) {
        await this.clientsService.handleDisconnect(client);
    }
    async handleUpdateNode(client, payload) {
        const node = await this.clientsService.handleUpdateNode(client, payload);
        this.server.emit("updateNode", node);
    }
};
exports.ClientsGateway = ClientsGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ClientsGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)("updateNode"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, node_entity_1.Node]),
    __metadata("design:returntype", Promise)
], ClientsGateway.prototype, "handleUpdateNode", null);
exports.ClientsGateway = ClientsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __metadata("design:paramtypes", [clients_service_1.ClientsService])
], ClientsGateway);
//# sourceMappingURL=clients.gateway.js.map