<script setup>
import { ref } from "vue"
import useWebsocketService from "@/services/websocketService"
import { zodResolver } from "@primevue/forms/resolvers/zod"
import { z } from "zod"

const websocketService = useWebsocketService()

const initialValues = ref({
    url: "",
})
const resolver = ref(
    zodResolver(
        z.object({
            url: z
                .string()
                .min(1, { message: "Please enter an IP address" })
                .ip({ varsion: "v4", message: "Please enter a valid IP address" }),
        }),
    ),
)
const websocketConnecting = ref(false)
const onFormSubmit = ({ valid }) => {
    if (valid) {
        console.log("Connecting to gateway...")
        websocketConnecting.value = true
        setTimeout(() => {
            websocketConnecting.value = false
        }, 2200)
        localStorage.setItem("gatewayAddress", websocketService.gatewayAddress)
        websocketService.connectToGateway()
    }
}
</script>

<template>
    <div class="container">
        <Card>
            <template #content>
                <Form
                    v-slot="$form"
                    :resolver="resolver"
                    :initialValues="initialValues"
                    @submit="onFormSubmit"
                    class="url-form"
                >
                    <div class="url-input">
                        <p class="title">Enter the gateway IP address:</p>
                        <InputText name="url" type="text" v-model="connectionStore.gatewayAddress" fluid />
                        <Message v-if="$form.url?.invalid" severity="error" size="small" variant="simple">{{
                            $form.url.error?.message
                        }}</Message>
                    </div>
                    <Button
                        class="submit-btn"
                        type="submit"
                        severity="secondary"
                        label="Connect"
                        :loading="websocketConnecting"
                    />
                </Form>
            </template>
        </Card>
    </div>
</template>

<style scoped lang="scss">
.container {
    padding: var(--padding);
}
.url-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .url-input .title {
        font-size: 16px;
        margin-bottom: 8px;
    }

    .submit-btn {
        margin-top: 8px;
    }
}
</style>
