import {createRouter, createWebHistory} from 'vue-router'

import Home from './components/home/Home.vue'
import About from './components/about/About.vue'
import Contacts from './components/contacts/Contacts.vue'
import Simulator from './components/simulator/Simulator.vue'

const routes = [
    {path:'/:pathMatch(.*)', name: 'Home', component: Home},
    {path:'/about', name: 'About', component: About},
    {path:'/contacts', name: 'Contacts', component: Contacts},
    {path:'/simulator', name: 'Simulator', component: Simulator}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router