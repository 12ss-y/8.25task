const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,


  // 自己设置的打开服务器的时候是否自动打开
  configureWebpack: {
    devServer: {
      open:true,
      port:8888,//修改本机端口号
      host:'localhost'//指定域名到本机
    }
  }
})
