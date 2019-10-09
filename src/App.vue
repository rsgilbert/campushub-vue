<template>
  <div id="app">
	<app-header></app-header>
	<app-main></app-main>
	<app-footer></app-footer>
  </div>
</template>

<script>
	import Header from './components/Header.vue'
	import Main from './components/Main.vue'
	import Footer from './components/Footer.vue'

	export default {
		data: () => ({

		}),
		components: {
			appHeader: Header,
			appMain: Main,
			appFooter: Footer,
		},
	}

</script>

<style scoped>
	#app {
		min-height: 100vh;
		background: #ccc;
	}
</style>
