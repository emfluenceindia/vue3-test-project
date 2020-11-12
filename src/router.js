//import { createRouter, createWebHashHistory } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

import DestinationList from './components/destination/DestinationList';
import Home from './pages/Home';
import About from './pages/About';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/destinations', component: DestinationList }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;