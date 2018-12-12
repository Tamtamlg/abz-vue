import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto';
import Vuelidate from 'vuelidate';
import VueMask from 'v-mask'

Vue.config.productionTip = false

Vue.use(VueScrollTo, {offset: -64});
Vue.use(Vuelidate)
Vue.use(VueMask);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
