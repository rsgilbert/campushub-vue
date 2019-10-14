import Home from '../components/Main/Home/Home.vue'
import Cart from '../components/Main/Cart/Cart.vue'
import Shop from '../components/Main/Shop/Shop.vue'
import Item from '../components/Main/Item/Item.vue'



export const routes = [
	{ path: '', component: Home },
	{ path: '/cart', component: Cart },
	{ path: '/shop', component: Shop },
	{ path: '/shop/:id', component: Item},
]