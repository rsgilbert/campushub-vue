<template>
	<div id="item">
		<h2>I am the item you want to buy</h2>
		<p>My id is {{ id }}</p>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				id: this.$route.params.id,
			}
		}
	}
</script>