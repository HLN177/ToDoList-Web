import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
// import './assets/main.css'

Vue.use(Vuex);
Vue.use(ElementUI);

new Vue({
  router,
  store: new Vuex.Store(store),
  render: (h) => h(App)
}).$mount('#app')
