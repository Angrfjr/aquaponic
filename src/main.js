import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './styles/tailwind.css';

import LoginView from './views/LoginView.vue'
import HomeView from './views/HomeView.vue'
import Dashboard from './views/Dashboardview.vue'
import Analysis from './views/Analysisview.vue'
import Device from './views/Deviceview.vue'
import Report from './views/Reportview.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: LoginView },
        { path: '/home', component: HomeView },
        { path: '/dashboard', component: Dashboard },
        { path: '/analysis', component: Analysis },
        { path: '/device', component: Device },
        { path: '/report', component: Report },
    ]
})

createApp(App).use(router).mount('#app')
