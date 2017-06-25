
<template>
  <div>
    <nv-head></nv-head>
    <div class="order"></div>
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
      	myOrder:'myOrder',
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

</style>
