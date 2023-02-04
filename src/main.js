import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import utils from './utils'
import { router } from './router'
import { Icon } from 'vant'
import { Button } from 'vant'
import { Tabbar, TabbarItem,Field ,NavBar,Form,Toast} from 'vant'
import { Cell, CellGroup } from 'vant'
import { Image as VanImage } from 'vant';
import store from './store'
const app =createApp(App)
app.use(Button)
app.use(store)
app.use(Toast)
app.use(VanImage)
app.use(router)
app.use(Form)
app.use(NavBar)
app.use(Cell)
app.use(CellGroup)
app.use(Icon)
app.use(Field)
app.use(Tabbar)
app.use(TabbarItem)
app.mount('#app')
