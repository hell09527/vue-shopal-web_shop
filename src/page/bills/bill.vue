<template>
  <div >
    <mt-header title="我的账单" class="header">
      <router-link to="/user" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
   <ul>
     <li> <input type="button" value="删除"></li>
     <li> <input type="button" value="删除"></li>
     <li> <input type="button" value="删除"></li>
     <li> <input type="button" value="删除"></li></ul>




  </div>

</template>

<script>
    export default {
        name: 'xxx',
        data(){
            return {}
        },
        mounted(){
        },
        methods: {},
        components: {}

    }
</script>

<style lang='scss' rel="stylesheet/scss" scoped>
  @import "../../assets/css/transform";
  .header {
    @include font-dpr(14px);
    height: px2rem(74px);
    .mint-button {
      .mintui {
        @include font-dpr(14px);
        padding: 0 px2rem(8px);
      }
      height: auto;
    }

  }
  ul{
    li{
      width: 100%;
      height: 2rem;
      background-color: #fff;
      border-bottom: 1px solid #000;
      position: relative;

      input{
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: #fff;
      }
    }
  }

</style>
