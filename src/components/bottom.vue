<template>
	<div class="bottom">

    	<div class="bottom-link"> <router-link to="/index">首页</router-link></div>
    	<div class="bottom-link"> <router-link to="/product/productList">产品</router-link></div>
    	<div class="bottom-link"> <router-link to="/myOrder">我的订单</router-link></div>
    	<div class="bottom-link"> <router-link to="/info">个人中心</router-link></div>

    </div>
</template>

<script>
	export default {
	    /*props: ['message'],*/
	    data() {
	      return {
	        message1: '111111111111111',

	      };
	    }

    };
</script>

<style>
	.bottom{
		width:100%;
		height: 40px;
		position:fixed;
		bottom:0;
		background:#fff;
	}
	.bottom div{
		float: left;
	}
  .bottom-link{
    width:25%;
    height:100%;
    text-align: center;
    line-height: 40px;

  }
  .bottom-link a{
    color:#999;
  }
</style>
