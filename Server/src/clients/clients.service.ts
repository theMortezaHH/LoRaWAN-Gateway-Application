import { Injectable } from "@nestjs/common"
import { Node } from "./entities/node.entity"
import { Server, Socket } from "socket.io"
import { Logger } from "@nestjs/common"

let nodes: Node[] = [
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
]

@Injectable()
export class ClientsService {
	private logger: Logger = new Logger("ClientsGateway")

	async afterInit(server: Server) {
		this.logger.log("Init")
	}

	async handleConnection(client: Socket): Promise<void> {
		this.logger.log(`Client connected: ${client.id}`)
		client.emit("updateClient", nodes)
	}

	async handleDisconnect(client: Socket): Promise<void> {
		this.logger.log(`Client disconnected: ${client.id}`)
	}

	async handleUpdateNode(client: Socket, payload: Node): Promise<Node> {
		// Fix me
		this.logger.log(
			`Received updateNode: ${JSON.stringify(payload)} from ${client.id}`,
		)
		nodes = nodes.map((node) => {
			if (node.nodeId === payload.nodeId) {
				return payload
			}
			return node
		})
		return payload // Fix me
	}
}
