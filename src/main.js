import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'
import { ValidationProvider } from 'vee-validate'
import BootstrapVue from 'bootstrap-vue'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueMoment, {
  moment,
})
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(Vuex)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
