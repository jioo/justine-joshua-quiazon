import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Meta from 'vue-meta'
import VueTyperPlugin from 'vue-typer'
import VueParticles from 'vue-particles'
import './assets/css/style.css'
import './registerServiceWorker'

Vue.use(Meta)
Vue.use(VueTyperPlugin)
Vue.use(VueParticles)

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
