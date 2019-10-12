import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		cartedProducts: [],
	},
	getters: {
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
		}
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