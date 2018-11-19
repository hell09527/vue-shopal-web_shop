<template>
  <div class="tabar"  v-show="countAnother ===0">
    <div class="tab">
      <div class="tab-item">
        <router-link to="/home">
          <div class="tab-icon"><img src="../assets/images/home.png" alt=""></div>
          <p class="tab-text" >首页</p>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sport">
          <div class="tab-icon"><img src="../assets/images/all.png" alt=""></div>
          <p class="tab-text">分类</p>
        </router-link>
      </div>

      <div class="tab-item">
        <router-link to="/shoppingCart">
          <div class="tab-icon"><img src="../assets/images/cart.png" alt=""></div>
          <p class="tab-text">购物车</p>
        </router-link>
      </div>

      <div class="tab-item">
        <router-link to="/user">
          <div class="tab-icon"><img src="../assets/images/usered.png" alt=""></div>
          <p class="tab-text">我的</p>
        </router-link>
      </div>
    </div>


  </div>

</template>
<style lang='scss' rel="stylesheet/scss">
  @import "../assets/css/transform";

  .tabar {
    .tab {
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      width: 100%;
      background: #fff;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);

      .tab-item {
        flex: 1;
        text-align: center;
        height:  px2rem(75px);
        width: px2rem(187.5px);
        padding-top: 10px;
        a {
          display: block;
          @include font-dpr(12px);
          color: rgb(77, 85, 93);
          &.active{
            color: #76D49B;
            text-decoration: none;
          }
        }
        .tab-icon {

          height:  px2rem(38px);
          width: px2rem(38px);
          margin: 0 auto;
          img {
            width: 100%;
            height: auto;
          }
        }
        .tab-text{
             padding-top:    px2rem(6px);
        }


      }
    }
  }
</style>
<script type='text/ecmascript-6'>
  import { mapGetters } from 'vuex';
  export default{
    data(){
      return {

      }
    },

      computed: {
        //报错行为
       ...mapGetters({
         countAnother: 'countAnother'
        }),
      },
    mounted:function () {

    },

    methods:{

    }
  };
</script>
