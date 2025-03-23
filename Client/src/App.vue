<script setup>
import useUserProfileStore from "@/store/user.profile"
import useWebsocketService from "@/services/websocketService"
import { onMounted } from "vue"
import TopBar from "@/components/TopBar.vue"

const userProfileStore = useUserProfileStore()
const websocketService = useWebsocketService()

onMounted(() => {
    //apply theme
    if (userProfileStore.isDarkTheme === undefined) {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            userProfileStore.isDarkTheme = true
            document.documentElement.classList = "dark-theme"
        }
    } else {
        document.documentElement.classList = userProfileStore.isDarkTheme ? "dark-theme" : ""
    }
})
</script>

<template>
    <div class="container">
        <TopBar />
        <div class="router">
            <Router-view />
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;

    .router {
        padding: 0 var(--padding);
    }
}
</style>
