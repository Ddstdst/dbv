<template>
	<div class="bottom">

    	<div> <router-link to="/index">index</router-link></div>
    	<div> <router-link to="/product">product</router-link></div>
    	<div> <router-link to="/myOrder">myOrder</router-link></div>
    	<div> <router-link to="/info">info</router-link></div>

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
		background:red;
	}
	.bottom div{
		float: left;
	}
</style>