//import { createRouter, createWebHashHistory } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

import DestinationList from './pages/destination/DestinationList.vue';
import Home from './pages/static/Home.vue';
import About from './pages/static/About.vue';
import Contact from './pages/static/Contact.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/destinations', component: DestinationList }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;