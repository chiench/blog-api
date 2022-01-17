import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },

    {
        path: '/blog/index',
        name: 'blogindex',

        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/blog/index.vue')
    },


    {
        path: '/blog/add',
        name: 'blog/add',

        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/blog/add.vue')
    },

    {
        path: '/blog/edit',
        name: 'blog/edit',

        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/blog/edit.vue')
    },



]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router