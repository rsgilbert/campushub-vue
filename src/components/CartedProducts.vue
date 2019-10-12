<template>
	<div id="cartedProducts">
		<div v-for="product in cartedProducts">
		<carted-product :product="product"></carted-product>	
		</div>
		<h3 id="total">Total: {{ total }}</h3>
		<button id="checkout">CHECKOUT</button>
	</div>
</template>

<script>
	import CartedProduct from './CartedProduct'
	export default {
		components: {
			CartedProduct,
		},
		computed: {
			cartedProducts: function () {
				return this.$store.getters.getCartedProducts
			},
			total: function() {
				return this.$store.getters.getTotal
			},
		},


	}
</script>

<style scoped>
	#cartedProducts {
		padding: .5rem;
		margin: .5rem;
		min-width: 15rem;
		background-color: #717571f0;
		position: fixed;
		top: 3.5rem;
		right: .5rem;
	}

	
	#total {
		border-top: #353035 1px solid;
		height: 1rem;
		text-align: center;
	}
	#checkout {
		width: 100%;
		height: 2rem;
		background: green;
		color: white;
		border: none;
		box-shadow: .25px .25px .1px .2px black;
		margin-top: .5rem;
		cursor: pointer;
	}
	#checkout:hover {
		font-weight: bold;
	}

</style>