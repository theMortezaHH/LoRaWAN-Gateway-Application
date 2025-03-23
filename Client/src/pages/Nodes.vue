<script setup>
import useNodesStore from "@/store/nodes"
import Node from "@/components/Node.vue"

const nodesStore = useNodesStore()
</script>

<template>
    <div class="container">
        <Node v-for="node in nodesStore.nodes" :key="node.id" :node="node" />
    </div>
</template>

<style scoped lang="scss">
.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--padding);
    padding: var(--padding);
    justify-content: center;
}
</style>
