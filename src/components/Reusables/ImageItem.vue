<template>
	<figure v-lazyload class="image__wrapper">
		<ImageSpinner
			class="image__spinner"
		/>
		<img 
			class="image__item"
			:data-url="source"
			alt="item image"
		>
	</figure>
</template>

<script>
	export default {
		name: "ImageItem",
		props: {
			'source': {
				type: String,
				required: true,
			}
		},
	}
</script>