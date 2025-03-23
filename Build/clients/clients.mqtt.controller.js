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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsMqttController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const clients_service_1 = require("./clients.service");
const clients_gateway_1 = require("./clients.gateway");
const node_entity_1 = require("./entities/node.entity");
let ClientsMqttController = class ClientsMqttController {
    clientsService;
    clientsGateway;
    constructor(clientsService, clientsGateway) {
        this.clientsService = clientsService;
        this.clientsGateway = clientsGateway;
    }
    async handleMqttMessage(payload) {
        const node = await this.clientsService.handleMqttMessage(payload);
        console.log(node);
        this.clientsGateway.server.emit("updateNode", node);
    }
};
exports.ClientsMqttController = ClientsMqttController;
__decorate([
    (0, microservices_1.MessagePattern)("gateway/nodes"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [node_entity_1.Node]),
    __metadata("design:returntype", Promise)
], ClientsMqttController.prototype, "handleMqttMessage", null);
exports.ClientsMqttController = ClientsMqttController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [clients_service_1.ClientsService,
        clients_gateway_1.ClientsGateway])
], ClientsMqttController);
//# sourceMappingURL=clients.mqtt.controller.js.map