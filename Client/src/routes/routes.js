import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/Home.vue"
import Nodes from "@/pages/Nodes.vue"
import Gateway from "@/pages/Gateway.vue"

import NotFound from "@/pages/NotFound.vue"

const routes = [
    {
        path: "/",
        component: Home,
        // children: [
        //     {
        //         path: "/nodes",
        //         component: Nodes,
        //     },
        // ],
    },
    {
        path: "/gateway",
        component: Gateway,
    },
    {
        path: "/nodes",
        component: Nodes,
    },

    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
