<template>
<div id="nav">
	<a href="#" id="logo__link">
		<img id="logo__image" :src="logo"/>
		<h5 id="logo__title">CampusHub</h5>
	</a>
	<div id="nav__options">
		<h3 class="option">Shop</h3>
		<h3 class="option">Messages</h3>
		<main-cart></main-cart>
	</div>

</div>
</template>

<script>
	  import MainCart from './MainCart';
	  var icon = require('../assets/basket.png')

	  export default {
		data: function(){
			return {
			logo: icon,
			}
		},
		components: {
			mainCart: MainCart,
		}
	  }
</script>

<style scoped>
#nav {
	border-bottom: 0.5px solid green;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0 0.5rem;
	padding: 0.3rem;
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
	align-items: center;
	justify-content: center;
	flex-direction: row;
}

.logo__img {
	width: 100%;
	color: purple;
}

@media(min-width: 40rem) {
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
