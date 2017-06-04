
<template>
  <div>
    <nv-head :title="info"></nv-head>
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
	
</style>
