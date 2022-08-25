import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// Vue渲染流程

// 1.浏览器渲染的是？
// main入口打包，生成js，自动引入到html模板


new Vue({
  // 2.
  // render渲染
  // $mount挂载
  // 将app.vue文件挂载到div.app
  render: h => h(App)
}).$mount('#app')//document.querySelector('#app)
