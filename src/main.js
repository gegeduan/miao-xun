// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 项目的入口文件
import Vue from 'vue'
// 当前目录下导入app
import App from './App'
import router from './router'
// 引入css初始化文件
import './assets/styles/resetpc.css'
import './assets/styles/iconfont.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
// 构建vue的根实例
new Vue({
  // index.html中的挂载点
  el: '#app',
  router,
  // 定义一个局部组件的使用
  components: { App },
  // 局部组件的模板
  template: '<App/>'
})

// 路由就是根据网址的不同返回不同的内容给用户.
