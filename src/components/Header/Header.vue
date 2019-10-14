<template>
	<div id="header">
		<div id="nav">
			<a href="#" id="logo__link" @click="toHome">
				<img id="logo__image" :src="logo"/>
				<h5 id="logo__title">CampusHub</h5>
			</a>
			<ul id="nav__options">
				<router-link to="/shop" active-class="active">
					<a>Shop</a>
				</router-link>	
				<router-link to="/cart" active-class="active">
					<a>Cart</a>
				</router-link>
				
			</ul>
		</div>
		<header-cart v-show="cartActive"></header-cart>
	</div>
</template>

<script>
	  import HeaderCart from './HeaderCart';
	  var icon = require('../../assets/basket.png')

	  export default {
		data: function(){
			return {
			logo: icon,
			}
		},
		components: {
			HeaderCart: HeaderCart,
		},
		computed: {
			cartActive: function() {
				return this.$store.getters.getTotal !== 0
			}
		},
		methods: {
			toHome: function() {
				this.$router.push({path: '/'})
			}
		}
	  }
</script>

<style scoped>
	#header {
		background-color: #b4ecb4;
		padding-right: .5rem;
		z-index: 10;
		position: sticky;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		top: 0;	
	}

	#nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 0 0;
		padding: 0 0.3rem;
		width: 100%;
		list-stcartyle: none;

	}
	#logo__link {
		display: flex;
		flex-display: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		text-decoration: none;
		color: #1b5810;
		cursor: pointer;
	}
	.active {
		color: darkgreen;
	}


	#logo__image {
		height: 2.5rem;
		margin-right: 0.5rem;
	}

	#logo__link:hover {
		color: #2fa515;
		cursor: pointer;
	}
	#logo__title {
		
	}
	.option {
		color: #1b5810;
		margin: 0.25rem;
	}
	.option:hover {
		color: #2fa515;
		cursor: pointer;
	}

	#nav__options {
		display: flex;
		justify-self: flex-end;
		flex-direction: row;
	}

	.logo__img {
		width: 100%;
		color: purple;
	}

	@media(min-width: 40rem) {
		#header {
			padding-right: 6rem;
		}
		#nav {
			padding-left: 1rem;
			padding-right: 1rem;
			margin-right: 5rem;
			margin-left: 5rem;
		}

		.option {
			margin: 0.5rem;
		}
		#logo__title {
			font-size: 2rem;
		} 
	}

</style>
