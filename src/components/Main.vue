<template>
    <div id="main__content">
      <main-search></main-search>
      <main-products></main-products>
	  <main-checkout></main-checkout>
    </div>
</template>

<script>
  import MainSearch from "./MainSearch";
  import MainProducts from "./MainProducts";
  import MainCheckout from "./MainCheckout";


  export default {
      components: {
          mainSearch: MainSearch,
          mainProducts: MainProducts,
		  MainCheckout: MainCheckout,

      }
  }
</script>

<style scoped>
  #main__content {
    display: flex;
    flex-direction: column;
	min-height: 100vh;
    
  }
</style>
