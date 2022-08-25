import Vue from 'vue'
import App from './App.vue'

import dayjs from 'dayjs'

import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false





// Vue渲染流程

// 1.浏览器渲染的是？
// main入口打包，生成js，自动引入到html模板

Vue.filter('toLower',function (str) {
  return str.toLowerCase()
})

Vue.filter('formatTime',function (time) {
  return dayjs(time).format('YYYY/MM/dd HH:mm:ss')
})

new Vue({
  // 2.
  // render渲染
  // $mount挂载
  // 将app.vue文件挂载到div.app
  render: h => h(App)
}).$mount('#app')//document.querySelector('#app)
