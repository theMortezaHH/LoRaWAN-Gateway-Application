<script setup></script>

<template>
    <div class="container">
        <Card>
            <template #content>
                <p class="title">Welcome to the app!</p>
                <p class="text">
                    Start by connecting to a gateway. Enter the IP address for the gateway in the
                    <router-link to="gateway">Gateway</router-link> tab and click the "Connect" button.
                </p>
            </template>
        </Card>
    </div>
</template>

<style scoped lang="scss">
.container {
    padding: var(--padding);
}

.title {
    font-size: var(--title-font-size);
    margin-bottom: 5px;
}

.text {
    padding-left: 15px;
    font-size: var(--text-font-size);
}
</style>
