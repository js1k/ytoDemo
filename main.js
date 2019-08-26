import Vue from 'vue'
import App from './App'
import common from '@/utils/common.js'
import {http} from '@/js_sdk/luch-request/index.js'

Vue.config.productionTip = false
Vue.prototype.$common=common
Vue.prototype.$http=http

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
