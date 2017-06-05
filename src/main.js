// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//alert(1)
import Vue from 'vue';
//import App from './App'
import routes from './router'
import VueRouter from 'vue-router'
//mock.js
import "../mockData/data.js"
import $ from 'jquery'
import './assets/commom.css'
Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})*/
const router = new VueRouter({
  /*mode: 'history',*/   //history模式 像正常的url 8080/list1 本来是8080/#/list1 哈希 需要后台支持
  routes
});
new Vue({
  router,

}).$mount('#app');




//ajax请求

  $.ajax({
    url        : "http://mockjs",    //请求的url地址
    dataType   : "json",   //返回格式为json
    async      : true, //请求是否异步，默认为异步，这也是ajax重要特性
    data       : {},    //参数值
    type       : "GET",   //请求方式
    beforeSend : function() {
      //请求前的处理
    },
    success: function(req) {
      //请求成功时处理
      console.log(req);
    },
    complete: function() {
      //请求完成的处理
    },
    error: function() {
      //请求出错处理
    }
  });
//alert(1);


