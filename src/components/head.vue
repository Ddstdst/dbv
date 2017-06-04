
<template>


  <div class="head">

    <h2>{{title}}</h2>

  </div>

</template>

<script>
  //import $ from 'webpack-zepto';

  export default {
    props: ['title'],
    data() {
      return {
        message1: '111111111111111',

      };
    }
    /*replace: true,*/
//    props: {
//      pageType: String,
//      /*fixHead: Boolean,
//      messageCount: Number,
//      needAdd: {
//        type: Boolean,
//        default: true
//      }*/
//    },
   /* data() {
      return {
        nickname: '',
        profileimgurl: '',
        show: false
      };
    },*/
   /* methods: {
      openMenu() {
        $('html, body, #page').addClass('scroll-hide');
        this.show = !this.show;
      },
      showMenus() {
        this.show = !this.show;
        $('html, body, #page').removeClass('scroll-hide');
      }
    },
    components: {
      'nvMenu': require('./menu.vue')
    }*/
  };
</script>
<style>
  .head{
    width:100%;
    height:60px;
    background:red;
    position:fixed;
    left:0;
    top:0;
  }
  .head h2{
  	width:100%;
  	height:100%;
  	text-align: center;
  }
</style>
