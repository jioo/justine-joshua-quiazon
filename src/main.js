import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Meta from 'vue-meta'
import VueTyperPlugin from 'vue-typer'
import VueClipboard from 'vue-clipboard2'
import VueParticles from 'vue-particles'
import './plugins/vuetify'
import './assets/css/style.css'
import './registerServiceWorker'

Vue.use(Meta)
Vue.use(VueTyperPlugin)
Vue.use(VueParticles)
Vue.use(VueClipboard)

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
