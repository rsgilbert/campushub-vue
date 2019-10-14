<template>
    <div id="shop__products">
        <div v-for="product in products">
			<shop-product :product="product"></shop-product>
        </div>
    </div>
</template>

<script>
	import ShopProduct from './ShopProduct'

	


    export default {
        name: "ShopProducts",
		components: {
			'ShopProduct': ShopProduct
		},

		data: function() {
			return {

			}
		}, 
		methods: {

		},
		computed: {
			products: function() {
				return this.$store.getters.getProducts
			}
		}
    }

	/*
	products: [
				{
					name: "Samsung S7 Edged",
					price: 450000,
					src: "https://logenson.sirv.com/campushub/s7_2.jpeg"
				}, {
					name: "Samsung S8",
					price: 650000,
					src: "https://logenson.sirv.com/campushub/s8_1.jpeg"
				}, 	{
					name: "Samsung S7 Edged",
					price: 450000,
					src: "https://logenson.sirv.com/campushub/s7_2.jpeg"
				}, {
					name: "Samsung S8",
					price: 650000,
					src: "https://logenson.sirv.com/campushub/s8_1.jpeg"
				}, 
			]
			*/
</script>

<style scoped>
#shop__products {
    display: flex;
    flex-direction: row;
	flex-wrap: wrap;
    align-items: center;
	justify-content: center;
}
</style>
