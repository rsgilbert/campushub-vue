import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'


import LazyLoadDirective from './directives/LazyLoadDirective'
import { store } from './store/store'
import { routes } from './router/routes'


Vue.config.productionTip = false
Vue.prototype.$http = axios



Vue.directive("lazyload", LazyLoadDirective)



Vue.use(VueRouter)
Vue.use(VueSweetalert2)


const router = new VueRouter({
	routes: routes,
	mode: 'history',
})



new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App)
})
