import { defineStore } from "pinia"
import { ref } from "vue"

const useUserProfileStore = defineStore(
    "UserProfileStore",
    () => {
        const isDarkTheme = ref()

        return { isDarkTheme }
    },
    { persist: true },
)

export default useUserProfileStore
