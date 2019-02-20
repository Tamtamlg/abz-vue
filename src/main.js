import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto';
import VeeValidate from 'vee-validate';
import VueMask from 'v-mask'

Vue.config.productionTip = false

Vue.use(VueScrollTo, {offset: -64});
Vue.use(VeeValidate, {
  classes: true
});
Vue.use(VueMask);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
