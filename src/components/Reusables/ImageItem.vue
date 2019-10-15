<template>
	<div class="Sirv" v-lazyload>
		<img
			id="image__item"
			:data-url="source"
			alt="img"
		/>
	</div>
</template>

<script>
	export default {
		name: "ImageItem",
		data: function() {
			return {
				iszoom: false,
			}
		},
		props: {
			'source': {
				type: String,
				required: true,
			}
		},
		methods: {
			makeZoom: function() {
				this.iszoom = !this.iszoom
			}
		}
	}
</script>

<style scoped>
	#image__item {
		width: 15rem;
		height: 15rem;
	}
	#zoombutton {
		width: 100%;
		height: 2rem;
		background: blue;
	}
</style>