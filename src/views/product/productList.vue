
<template>
  <div class="productList">
      <div class="productList-search">
          <div></div>
      </div>
      <div class="productLIst-list">

        <ul>
          <li v-for="product in products" class="productList-li">
            <router-link :to="{name:'productDetail',params:{id:product.id}}">
              <div></div>
            </router-link>


          </li>
        </ul>
      </div>
  </div>

  <!-- <div>
     <router-link :to="{name:'list2',params:{id:id}}">list1</router-link>
     &lt;!&ndash;<router-link to="/list2">Go to Foo</router-link>&ndash;&gt;
   </div>-->
</template>
<script>
  import $ from 'jquery';
  export default {

    mounted:function () {
        this.getproductList()
    },
    data() {
      return {
        products:[]
//        id:23423,
      };
    },
    methods:{
        getproductList(){
              $.ajax({
                url        : "http://products",    //请求的url地址
                dataType   : "json",   //返回格式为json
                async      : true, //请求是否异步，默认为异步，这也是ajax重要特性
                data       : {},    //参数值
                type       : "GET",   //请求方式

                success:(req)=> {    //使用箭头函数就可以this指向实例

                    //success: function(req) {
                    //     //请求成功时处理
                    //     console.log(req);
                    //   },
                   //请求成功时处理    如此不能指向实例this   箭头函数绑定父级this


                  this.products=req;
//                  console.log(req);
//                  console.log(this.products)
                },

              });
        }
    },
    components: {

    }
  };
</script>
<style>
  .productList{
    /*width:100%;*/
    /*height:100%;*/
    box-sizing: border-box;
    padding:50px 0 40px;
    background:#F2F2F2;
  }
  .productList ul{
    overflow: hidden;
    width:100%;
    height:100%;

  }
  .productList-search{
    width:100%;
    height:50px;
    background:#fff;
    overflow:hidden;
  }
  .productList-search div{
    width:90%;
    height:30px;

    border:1px solid #2d83ce;
    margin:10px auto 0;
    border-radius: 10px;
  }
  .productList-li {
    height:121px;
    width:90%;
    margin:10px auto 0;
    background:url(../../assets/images/product.png) no-repeat;
    background-size:100% 100%;
  }
  .productList-li div{
    height:121px;
    width:100%;
    margin:10px auto 0;
    background:url(../../assets/images/product.png) no-repeat;
    background-size:100% 100%;
  }

</style>
