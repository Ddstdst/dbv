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
Vue.config.productionTip = false;
Vue.use(VueRouter);
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

router.beforeEach((to, from, next) => {
  //  alert(1)
  // 处理左侧滚动不影响右边
  //$('html, body, #page').removeClass('scroll-hide');
  //console.log(to.title)
  console.log(to)
  console.log(to.matched)  /*matched.some 数组的一个方法*/
  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (/*判断是否登陆*/store.state.userInfo.userId) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});


//ajax请求

//alert(1);


