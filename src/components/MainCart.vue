<template>
	<div id="cart"
		v-on:mouseover="onBasketHover"
		v-on:mouseleave="onBasketUnhover">
		<div id="basket">{{ cartCount }}</div>
		<carted-products v-show="isBasketHovered"></carted-products>
		
	</div>
</template>

<script>
	import CartedProducts from './CartedProducts'
	export default {
		data: function() { 
			return {
				isBasketHovered: false,
			}
		},
		components: {
			CartedProducts,
		},
		methods: {
			onBasketHover: function() {
				this.isBasketHovered = true;
			},
			onBasketUnhover: function() {
				this.isBasketHovered = false;
			}
		},
		computed: {
			cartCount: function() {
				return this.$store.getters.getCartCounter
			}
		},
		
	}

</script>

<style scoped>
#cart {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
}

#basket {
	height: 2.5rem;
	width: 2.5rem;
	margin: .5rem;
	margin-left: 1rem;
	border: 4px solid green;
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	border-top-color: transparent;
	align-items: center;
	justify-content: center;
	color: purple;
	font-weight: bold;
	font-size: 1.5rem;
	cursor: pointer;
}
</style>