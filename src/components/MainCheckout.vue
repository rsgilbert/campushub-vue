<template>
	<div id="checkout">
		<button id="checkout__button">CHECKOUT</button>
	</div>
</template>

<script>

</script>

<style scoped>
	#checkout {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#checkout__button {
		height: 2.5rem;
		width: 50%;
		background: purple;
		color: white;
		border: none;
		box-shadow: 1px 1px 1px 1px black;
		margin: 1rem;

	}
	#checkout__button:hover {
		font-weight: bold;
	}
</style>