<script setup>
import useWebsocketService from "@/services/websocketService"
import { defineProps, ref } from "vue"

const websocketService = useWebsocketService()
const props = defineProps({
    node: Object,
})

const changeState = (node) => {
    websocketService.newWsMessage("updateNode", node)
}
</script>

<template>
    <Card>
        <template #content>
            <div class="node-content">
                <div class="node-info">
                    <p class="title node-name">{{ props.node.nodeName }}</p>
                    <p class="title node-id">#{{ props.node.nodeId }}</p>
                </div>

                <ToggleSwitch v-model="props.node.state" @change="changeState(props.node)" />
            </div>
        </template>
    </Card>
</template>

<style scoped lang="scss">
.node-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .node-info {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        gap: 5px;

        .title {
            font-size: var(--text-font-size);
        }
        .node-id {
            opacity: 0.4;
        }
    }
}
</style>
