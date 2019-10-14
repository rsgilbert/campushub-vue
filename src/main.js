import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


import LazyLoadDirective from './directives/LazyLoadDirective'
import { store } from './store/store'
import { routes } from './router/routes'

Vue.config.productionTip = false


Vue.directive("lazyload", LazyLoadDirective)


Vue.use(VueRouter)

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
