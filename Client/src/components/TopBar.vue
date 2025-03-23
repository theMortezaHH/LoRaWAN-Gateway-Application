<script setup>
import useUserProfileStore from "@/store/user.profile"
import { ref } from "vue"
import { useRouter } from "vue-router"

const userProfileStore = useUserProfileStore()
const router = useRouter()
const pages = ref([
    {
        label: "Gateway",
        icon: "pi pi-sort-alt",
        command: () => router.push("gateway"),
    },
    {
        label: "Nodes",
        icon: "pi pi-sitemap",
        command: () => router.push("nodes"),
    },
])
const clientWidth = ref(document.documentElement.clientWidth)
const changeTheme = () => {
    userProfileStore.isDarkTheme = !userProfileStore.isDarkTheme
    document.documentElement.classList = userProfileStore.isDarkTheme ? "dark-theme" : ""
}
</script>

<template>
    <Menubar v-if="clientWidth >= 960" :model="pages">
        <template #start>
            <div class="title">Simple LoRaWAN SPA</div>
        </template>
        <template #end>
            <p
                class="theme-btn pi"
                :class="userProfileStore.isDarkTheme ? 'pi-moon' : 'pi-sun'"
                @click="changeTheme()"
            ></p>
        </template>
    </Menubar>
    <Menubar v-else :model="pages">
        <template #button></template>
        <template #end>
            <div class="title">Simple LoRaWAN SPA</div>
            <p
                class="theme-btn pi"
                :class="userProfileStore.isDarkTheme ? 'pi-moon' : 'pi-sun'"
                @click="changeTheme()"
            ></p>
        </template>
    </Menubar>
</template>

<style scoped lang="scss">
.title {
    margin-bottom: 4px;
    font-size: var(--title-font-size);
    margin-right: 5px;
}
.p-menubar {
    height: 60px;
    justify-content: start;
    align-items: center;
    padding-left: var(--padding);
}
.p-menubar-item-icon {
    font-size: 5px;
}
.theme-btn {
    cursor: pointer;
    font-size: var(--text-font-size);
    padding: 7px;
    border-radius: 50%;
    margin: 0 10px 0 auto;
    transition:
        background var(--p-transition-duration),
        color 0.3s ease;
}
.theme-btn:hover {
    background: var(--p-content-hover-background);
}
</style>
