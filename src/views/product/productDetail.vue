
<template>
  <div class="proDetail">

  </div>
  <!-- <div>
     <router-link :to="{name:'list2',params:{id:id}}">list1</router-link>
     &lt;!&ndash;<router-link to="/list2">Go to Foo</router-link>&ndash;&gt;
   </div>-->
</template>
<script>

  export default {
    mounted() {
      alert('productId'+this.$route.params.id)
    },
    data() {
      return {
        product:'product',
        id:23423,
      };
    },
    components: {

    }
  };
</script>
<style>
  .proDetail{

  }
</style>
