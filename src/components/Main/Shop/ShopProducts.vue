<template>
    <div id="shop__products">
        <div v-for="product in products">
            <shop-product :product="product"></shop-product>
        </div>
    </div>
</template>

<script>
import ShopProduct from './ShopProduct'




export default {
    name: "ShopProducts",
    components: {
        'ShopProduct': ShopProduct
    },

    data: function () {
        return {

        }
    },
    methods: {

    },
    computed: {
        products: function () {
            let myproducts = [
                {
                    name: "Samsung S7 Edged",
                    price: 450000,
                    src: "/dist/samsungs7.jpeg"
                }, {
                    name: "iphone 13",
                    price: 1650000,
                    src: "/dist/iphone13.jpeg"
                }, {
                    name: "Pressure cooker",
                    price: 450000,
                    src: "/dist/pressure cooker.jpeg"
                }, {
                    name: "HP Laptop",
                    price: 4650000,
                    src: "/dist/hp laptop.jpeg"
                },
                {
                    name: 'Analog watch',
                    price: 500000,
                    src: '/dist/watch.jpg'
                }
            ]
            console.log('products are', myproducts)
            return myproducts;
            //return this.$store.getters.getProducts
        }
    }
}


</script>

<style scoped>
#shop__products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
