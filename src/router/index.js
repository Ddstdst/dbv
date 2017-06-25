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
//product
const productList = resolve => {
  require.ensure(['../views/product/productList.vue'], () => {
    resolve(require('../views/product/productList.vue'));
  });
};
const productDetail = resolve => {
  require.ensure(['../views/product/productDetail.vue'], () => {
    resolve(require('../views/product/productDetail.vue'));
  });
};
const routers=[
  {
    path: '/index',
    name: 'index',
    meta:{title:'首页'},
    component: index
  },
  {
    path: '/product',
    name: 'product',
    component(resolve) {
      require.ensure(['../views/product/product.vue'], () => {
        resolve(require('../views/product/product.vue'));
      });
    },
    children: [
      {
        name:'productList',
        meta:{title:'产品'},
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'productList',
        component: productList
      },
      {
        name:'productDetail',
        meta:{title:'详情'},
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'productDetail/:id',
        component: productDetail
      }
    ]
  },

  {
    path: '/myOrder',
    name: 'myOrder',
    meta:{title:'我的订单'},
    component(resolve) {
      require.ensure(['../views/myOrder.vue'], () => {
        resolve(require('../views/myOrder.vue'));
      });
    }
  },

  {
    path: '/info',
    name: 'info',
    meta:{title:'个人信息'},
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
