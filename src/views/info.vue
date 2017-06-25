
<template>
  <div class="info">
    <nv-head></nv-head>
    <div class="infomation"></div>
    <nv-bottom></nv-bottom>
  </div>

  <!-- <div>
     <router-link :to="{name:'list2',params:{id:id}}">list1</router-link>
     &lt;!&ndash;<router-link to="/list2">Go to Foo</router-link>&ndash;&gt;
   </div>-->
</template>
<script>
  import nvHead from '../components/head.vue';
	import nvBottom from '../components/bottom.vue';
  export default {
    mounted() {

    },
    data() {
      return {
      	info:'info',
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
  .info{
    width:100%;
    height:100%;
    background:#F2F2F2;
  }
  .infomation{
    width:100%;
    height:100%;
    background:#F2F2F2;
    box-sizing: border-box;
    padding:50px 0 40px;
    background:url(../assets/images/info.png) no-repeat 0px 50px;
    background-size:100% 60%;
  }
</style>
