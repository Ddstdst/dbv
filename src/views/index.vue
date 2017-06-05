
<template>
	<!--要写个div包裹整个-->
	<div>

    	<nv-head :title="index"></nv-head>
    	<div class='index'>

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

	}
</style>
