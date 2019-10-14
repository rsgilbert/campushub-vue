<template>
	<div id="shopproductimage">
		<div class="product__img--background">
			<div class="product__img--picture" 
				v-bind:style="{ 'background-image': 'url(' + src  + ')' }">
				<div class="cartedBadge" :class="{ hideCartBadge: !carted }">
					<p class="cartedBadge__text">ON CART</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ../../Reusables/ImageItem

	export default {
		name: "ShopProductImage",
		props: ['src', 'carted'],
		components: {
			ImageItem: ImageItem,
		},
		computed: {
			showCartBadge: function() {

			}
		}
	}
</script>

<style scoped>
	.product__img--background {
		border-radius: 4px;
		background: #cff7da;
		background-position: center;
		background-size: cover;
		
		height: 19rem;
		width: 19rem;
		display: flex;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		margin: .5rem;
	}
	.product__img--picture {
		border-radius: 4px;
		background: #cff7da;
		background-position: center;
		background-size: cover;
		height: 17rem;
		width: 17rem;
		display: flex;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		margin: .5rem;
		position: relative;
	}
	.cartedBadge {
		background: white;
		padding: .2rem .5rem;
		position: absolute;
		top: 1rem;
		right: 1rem;
		
	}
	.hideCartBadge {
		display: none;
	}

	.cartedBadge__text {
		color: red;
	}
</style>