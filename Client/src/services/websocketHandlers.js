import useNodesStore from "@/store/nodes"

const handlers = {
    wsConnected: () => {
        console.log("Connected to gateway")
    },
    wsDisconnected: () => {
        console.log("Disconnected from gateway") //debug log
    },

    updateClient: (data) => {
        console.log("Update Client: ", data) //debug log

        const nodesStore = useNodesStore()
        nodesStore.nodes = data
    },

    updateNode: (data) => {
        console.log("Update Node: ", data) //debug log

        const nodesStore = useNodesStore()
        if (!nodesStore.nodes.length || !nodesStore.nodes.find((node) => node.nodeId === data.nodeId)) {
            nodesStore.nodes.push(data)
        } else {
            const node = nodesStore.nodes.find((node) => node.nodeId === data.nodeId)
            node.nodeName = data.nodeName
            node.state = data.state
        }
    },
}

export default handlers
