import Vue from 'vue'
import Router from 'vue-router'
import VueAnalytics from 'vue-analytics'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'index', component: () => import('@/views/index') },
        { path: '*', name: '404', component: () => import('@/components/page-not-found') }
    ]
})

if (process.env.NODE_ENV === 'production') {
    Vue.use(VueAnalytics, {
        id: 'UA-113519778-2',
        router
    })
}

export default router
