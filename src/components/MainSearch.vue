<template>
  <form id="search">
    <input v-model="searchString" placeholder="Search Products"/>
    <button id="submitButton">Search</button>
  </form>

</template>

<script>
    export default {
        name: "MainSearch",
        data: () => ({
          searchString: "",
        }),
    }
</script>

<style scoped>
  #search {
    height: 0.5rem;
    width: 90%;
    align-self: center;
    margin: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;

  }
  input {
    justify-self: stretch;
    border: none;
    width: 100%;
    padding: 0.5rem;
    margin-right: .5rem;
	color: darkgreen;
  }
  
  #submitButton {
    justify-self: flex-end;
    padding: .5rem;
	border-radius: 2px;
	border: 1px solid green;
	color: darkgreen;
  }

  #submitButton:hover {
	  background: green;
	  color: white;
  }

  @media(min-width: 40rem) {
	  #search {
		  width: 60%;
	  }
  }
</style>
