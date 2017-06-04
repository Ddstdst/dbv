// import Vue from 'vue'
// import Router from 'vue-router'
// import Hello from '@/components/Hello'
//
// Vue.use(Router)

/*export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})*/
const index = resolve => {
  require.ensure(['../views/index.vue'], () => {
    resolve(require('../views/index.vue'));
  });
};

const routers=[
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/product',
    name: 'product',
    component(resolve) {
      require.ensure(['../views/product.vue'], () => {
        resolve(require('../views/product.vue'));
      });
    }
  },

  {
    path: '/myOrder',
    name: 'myOrder',
    component(resolve) {
      require.ensure(['../views/myOrder.vue'], () => {
        resolve(require('../views/myOrder.vue'));
      });
    }
  },

  {
    path: '/info',
    name: 'info',
    component(resolve) {
      require.ensure(['../views/info.vue'], () => {
        resolve(require('../views/info.vue'));
      });
    }
  },
  {
    path: '*',
    component: index
  }
]
export default routers;
