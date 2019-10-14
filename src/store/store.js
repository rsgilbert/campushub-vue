import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// Vue.prototype.$http = axios



var API_URL = 'http://localhost:8000/api/shop/products'

export const store = new Vuex.Store({
	state: {
		cartedProducts: [],
		products: [],
	},
	getters: {
		getProducts: function(state) {
			if (state.products.length === 0) {
				fetch(API_URL)
				.then(function(response) {
					return response.json()				
				})
				.then(function(myJson) {
					state.products = myJson
				})
			}
			return state.products
		},
		getCartCounter: function (state) {
			return state.cartedProducts.length
		},
		getCartedProducts: function(state) {
			return state.cartedProducts
		},
		getTotal: function(state) {
			var total = 0
			state.cartedProducts.forEach((item) => {
				total += item.price
			})
			return total
		},
	},
	mutations: {
		addProduct: function(state, product) {
			state.cartedProducts.push(product)
		},
		removeProduct: function(state, product) {
			state.cartedProducts = state.cartedProducts.filter((item) => {
				return product.name !== item.name
			})
			console.log(state.cartedProducts)
		},

	}
})