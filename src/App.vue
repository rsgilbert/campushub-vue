<template>
  <div id="app">
	<app-header></app-header>
	<hr>
	<router-view></router-view>
	<hr>
	<app-footer></app-footer>
  </div>
</template>

<script>
	import Header from './components/Header/Header.vue'
	import Footer from './components/Footer/Footer.vue'

	export default {
		data: () => ({

		}),
		components: {
			appHeader: Header,
			appFooter: Footer,
		},
	}

</script>

<style scoped>
	#app {
		background: #cccccc;
		padding: 0 0;
	}
</style>
