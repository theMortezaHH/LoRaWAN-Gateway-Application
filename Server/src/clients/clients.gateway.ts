import {
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer,
	OnGatewayInit,
	OnGatewayConnection,
	OnGatewayDisconnect,
} from "@nestjs/websockets"
import { Server, Socket } from "socket.io"
import { ClientsService } from "./clients.service"
import { Node } from "./entities/node.entity"

@WebSocketGateway()
export class ClientsGateway
	implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
	@WebSocketServer() server: Server

	constructor(private clientsService: ClientsService) {}

	async afterInit(server: Server) {
		await this.clientsService.afterInit(server)
	}

	async handleConnection(client: Socket) {
		await this.clientsService.handleConnection(client)
	}

	async handleDisconnect(client: Socket) {
		await this.clientsService.handleDisconnect(client)
	}

	@SubscribeMessage("updateNode")
	async handleUpdateNode(client: Socket, payload: Node) {
		const node = await this.clientsService.handleUpdateNode(client, payload)
		this.server.emit("updateNode", node)
	}
}
