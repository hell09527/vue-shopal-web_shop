<template>
  <div id="app">

      <transition name="slide-left">

        <router-view></router-view>
      </transition>

    <!--footer-->
    <tabar  ></tabar>
  </div>
</template>

<script>
  import tabar from '@/components/tabar'

  export default {
    name: 'app',
    mounted(){

    },
    methods:{

    },
    components: {
      tabar
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "assets/css/transform";
  html,body{
    background: #F5F5F5;
  }

  #app {
    font-family: "PingFang SC" ,"Helvetica Neue", Helvetica STHeiTi Arial sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;

  }
  .mint-toast.is-placetop{
    padding: px2rem(10px) px2rem(15px) !important;
      .mint-toast-text{
         @include  font-dpr(14px)
      }
  }

  //渐变动效
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: all .1s ease-in;
    opacity: 1;
  }
  .slide-left-enter,
  .slide-left-leave-active {
    opacity: 0;
  }

</style>
