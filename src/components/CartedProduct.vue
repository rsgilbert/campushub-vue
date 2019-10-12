<template>
	<div class="product">
		<h3 class="product__name">{{ product.name }}</h3>
		<p class="product__price">{{ product.price }}</p>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				toggleCheckbox: "checked",
			}
		},
		props: ['product'],

		watch: {
			toggleCheckbox: function(val, oldVal) {
				this.decrement()
			}
		},
		methods: {
			decrement: function() {
				this.$store.commit('removeProduct', this.product)
			}

		}
	}
</script>

<style scoped>
	.product {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-content: space-between; 
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.product__name {
		color: purple;
	}

	.product__price {
		color: #282928;
	}
</style>