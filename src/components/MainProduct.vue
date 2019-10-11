<template>
	<div id="main__product">
		<div class="product__img--background">
			<div class="product__img--picture" 
				v-bind:style="{ 'background-image': 'url(' + product.src  + ')' }">
			</div>
		</div>
		<div class="product__detail">
			<h3 class="product__name"> {{ product.name }}</h3>
			<h3 class="product__price"> {{ product.price }} /= </h3>
		</div> 
		<div class="main__actions">
			<button class="button__visit"><b>VISIT</b></button>
			<button class="button__cart">CART</button>
		</div>
	</div>
</template>

<script>
    export default {
        name: "MainProduct",
		props: ['product'],
		methods: {
			resolveStyle: function(product) {
				return "{'background-image': 'https://logenson.sirv.com/campushub/s8_1.jpeg'}"
			}
		}
    }
</script>

<style scoped>
.main__product {
    display: flex;
    flex-direction: column;

	padding: 1rem;

}
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
}
.product__img {
	height: 18rem;
	width: 18rem;
	border-radius: 4px;
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

.main__actions {
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


@media(min-width: 40rem) {
	.product__img--background {
		height: 21rem;
		width: 21rem;
	}
}

</style>
