import Groups from '../views/Groups.vue'
import UeberUns from '../views/UeberUns.vue'
import Fotos from '../views/Fotos.vue'
import Verleih from '../views/Verleih.vue'

import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name:'home',
            component: UeberUns
        },
        {
            path:'/ueberuns',
            name:'ueberuns',
            component: UeberUns
        },
        {
            path: '/gruppen',
            name: 'gruppen',
            component: Groups
        },
        {
            path: '/fotos',
            name: 'fotos',
            component: Fotos
        },
        {
            path: '/verleih',
            name: 'verleih',
            component: Verleih
        }
    ]
})

export default router