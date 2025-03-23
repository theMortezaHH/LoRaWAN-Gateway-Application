import { defineStore } from "pinia"
import { ref } from "vue"

const useNodesStore = defineStore("NodesStore", () => {
    const nodes = ref([])

    return { nodes }
})

export default useNodesStore
