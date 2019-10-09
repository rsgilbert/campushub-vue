<template>
    <div id="main__content">
      <main-search></main-search>
      <main-products></main-products>
        <p>I am main </p>
    </div>
</template>

<script>
  import MainSearch from "./MainSearch";
  import MainProducts from "./MainProducts";
  export default {
      components: {
          mainSearch: MainSearch,
          mainProducts: MainProducts,

      }
  }
</script>

<style scoped>
  #main__content {
    display: flex;
    flex-direction: column;
    
  }
</style>
