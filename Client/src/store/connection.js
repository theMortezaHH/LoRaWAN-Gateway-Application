import { defineStore } from "pinia"
import { useRouter } from "vue-router"
import io from "socket.io-client"
import handlers from "@/composable/websocketHandlers"

const useConnectionStore = defineStore("ConnectionStore", () => {
    const router = useRouter()

    // Websocket connection
    const url = window.location.origin
    console.log("Connecting to: ", url) //debug log
    const websocket = io(url)

    // Websocket event handlers
    websocket.on("connect", () => {
        handlers.wsConnected()
        router.push("nodes")
    })
    websocket.on("disconnect", () => {
        handlers.wsDisconnected()
    })

    websocket.on("updateClient", (data) => {
        handlers.updateClient(data)
    })
    websocket.on("updateNode", (data) => {
        handlers.updateNode(data)
    })

    const newWsMessage = (event, data) => {
        websocket.emit(event, data)
    }

    return { newWsMessage }
})

export default useConnectionStore
