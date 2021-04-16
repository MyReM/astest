import Vue from 'vue'
import App from './App'
import  jwt  from  'jsonwebtoken'
import propMessage from './pages/components/prop-message/prop-message.vue'
let api = 'https://api-dev.macaotown.com/'

// 全局註冊消息彈窗組件
Vue.component('prop-message',propMessage)

// #ifdef H5
let jweixin = require('jweixin-module')
Vue.prototype.$wx = jweixin
// #endif

Vue.config.productionTip = false
Vue.prototype.$jwt = jwt
Vue.prototype.$api = api
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
