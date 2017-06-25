
<template>
	<!--要写个div包裹整个-->
	<div class="index">

    	<nv-head></nv-head>
    	<div class="index-list">
      </div>
    	<nv-bottom></nv-bottom>
  </div>





</template>
<script>
  import nvHead from '../components/head.vue';
  import nvBottom from '../components/bottom.vue';

  export default {
    mounted() {

    },
    data() {
      return {
      	index:'index',
        id:23423,
      };
    },
    components: {
        nvHead,
		    nvBottom
    }
  };
</script>
<style>
	.index{
    height:100%;
    width:100%;
    background:#F2F2F2;
	}
  .index-list{
    width:100%;
    height:100%;
    padding:50px 0 40px;
    box-sizing: border-box;

    background:url(../assets/images/index.jpg) no-repeat;
    background-size:100% 70%;
  }


</style>
