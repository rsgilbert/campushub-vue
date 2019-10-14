<template>
	<div id="shop__product">
		<shop-product-image :src="product.src" :carted="carted"></shop-product-image>
		<div class="product__detail">
			<h3 class="product__name"> {{ product.name }}</h3>
			<h3 class="product__price"> {{ product.price }} /= </h3>
		</div> 
		<div class="shop__actions">
			<button class="button__visit" @click="toItem">VISIT</button>
			<button class="button__cart" 
				v-on:click="makeCart"
				:style="cartStyle"
			>{{ cartValue }}</button>
		</div>
	</div>
</template>

<script>
	import ShopProductImage from './ShopProductImage'
    export default {
        name: "ShopProduct",
		props: ['product'],
		data() {
			return {
				cartValue: "CART",
				color: 'green',
			}
		},
		components: {
			'ShopProductImage': ShopProductImage,
		},
		methods: {
			makeCart: function(event) {
				if(this.cartValue == "CART") {
					this.cartValue = "UNCART"
					this.color = 'purple'
					this.increment()
				} else if(this.cartValue === "UNCART") {
					this.cartValue = "CART"
					this.color = 'green'
					this.decrement()
				}
			},
			increment: function() {
				this.$store.commit('addProduct', this.product)
			},
			decrement: function() {
				this.$store.commit('removeProduct', this.product)
			},
			toItem: function() {
				this.$router.push({path: "/shop/" + this.product.id})
			}

		},
		computed: {
			carted: function() {
				return this.cartValue === "UNCART"
			},
			cartStyle: function() {
				return {'border-color': this.color,
					'color': this.color}
			}
		}
    }
</script>

<style scoped>
	.shop__product {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}
		

	.product__detail {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
	}

	.product__name {
		color: green;
	}

	.product__price {
		color: #737373;
	}

	.shop__actions {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
		padding-top: 0.5rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid gray;
	}

	.button__visit {
		background-color: green;
		color: white;
		border: none;
		border-radius: 2px;
		width: 49%;
		height: 2rem;
		cursor: pointer;
	}
	.button__cart {
		color: green;
		border: 1px solid green;
		border-radius: 3px;
		background-color: #cccccc;
		width: 49%;
		height: 2rem;
		cursor: pointer;
	}
	.button__cart:hover,
	.button__visit:hover {
		font-weight: bold;
	}


	@media(min-width: 40rem) {
		.product__img--background {
			height: 21rem;
			width: 21rem;
		}
	}

</style>
