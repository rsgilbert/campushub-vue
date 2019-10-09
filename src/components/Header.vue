<template>
<div id="nav">
	<h2 id="logo__name"><a href="#" id="logo__link">CampusHub</a></h2>
	<div id="nav__options">
		<h3 class="option">Shop</h3>
	</div>
</div>
</template>

<script>
</script>

<style scoped>
#nav {
	border-bottom: 0.5px solid green;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 0 0.5rem;
	padding: 1rem;
}
#logo__link {
	text-decoration: none;
	color: #1b5810;
	cursor: pointer;
}

#logo__link:hover {
	border-bottom: 1rem solid black;
}
.option {
	color: #1b5810;
}
.option:hover {
	border-bottom: 0.2rem solid black;
}

ul {
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	min-height: 3rem;
	background: #c6b1ff;
	list-style: none;
	z-index: 1;
	width: 100%;
}

.logo__img {
	width: 100%;
	color: purple;
}

</style>
