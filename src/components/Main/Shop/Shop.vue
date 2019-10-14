<template>
    <div id="shop__content">
      <shop-search></shop-search>
      <shop-products></shop-products>
	  <shop-checkout></shop-checkout>
    </div>
</template>

<script>
  import ShopSearch from "./ShopSearch";
  import ShopProducts from "./ShopProducts";
  import ShopCheckout from "./ShopCheckout";


  export default {
      components: {
          shopSearch: ShopSearch,
          shopProducts: ShopProducts,
		  ShopCheckout: ShopCheckout,

      }
  }
</script>

<style scoped>
  #shop__content {
    display: flex;
    flex-direction: column;
	min-height: 100vh;
    
  }
</style>
