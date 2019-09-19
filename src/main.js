import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueProgressBar from 'vue-progressbar'

// css and scss files include
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/scss/responsive.scss'
import '@/assets/scss/style.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueProgressBar, {
  color: '#7DEADF',
  failedColor: '#7DEADF',
  thickness: '4px',
  transition: {
    speed: '0.5s',
    opacity: '0.10s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
