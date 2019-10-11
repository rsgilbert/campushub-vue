<template>
    <div id="main__products">
        <div class="main__product" v-for="product in products">
			<main-product :product="product"></main-product>
        </div>
    </div>
</template>

<script>
	import MainProduct from './MainProduct'

    export default {
        name: "MainProducts",
		components: {
			'MainProduct': MainProduct
		},

		data: function() {
			return {
				products: [
				{
					name: "Samsung S7 Edged",
					price: "450,000",
					src: "https://logenson.sirv.com/campushub/s7_2.jpeg"
				}, {
					name: "Samsung S8",
					price: "650,000",
					src: "https://logenson.sirv.com/campushub/s8_1.jpeg"
				}, 	{
					name: "Samsung S7 Edged",
					price: "450,000",
					src: "https://logenson.sirv.com/campushub/s7_2.jpeg"
				}, {
					name: "Samsung S8",
					price: "650,000",
					src: "https://logenson.sirv.com/campushub/s8_1.jpeg"
				}, 
			]
			}
		}, 
		methods: {
		}
    }
</script>

<style scoped>
#main__products {
    display: flex;
    flex-direction: row;
	flex-wrap: wrap;
    align-items: center;
	justify-content: center;
}
</style>
