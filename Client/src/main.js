import { createApp } from "vue"
import { createPinia } from "pinia"
import piniaPersist from "pinia-plugin-persistedstate"
import "@/style.scss"
import App from "./App.vue"
import PrimeVue from "primevue/config"
import Preset from "@/themes/preset.js"
import ConfirmationService from "primevue/confirmationservice"
import "primeicons/primeicons.css"
import ToastService from "primevue/toastservice"
import router from "@/routes/routes.js"

const app = createApp(App)
const pinia = createPinia()

app.use(router)
pinia.use(piniaPersist)
app.use(pinia)
app.use(PrimeVue, {
    theme: {
        preset: Preset,
        options: {
            darkModeSelector: ".dark-theme",
        },
    },
})
app.use(ConfirmationService)
app.use(ToastService)

app.mount("#app")
