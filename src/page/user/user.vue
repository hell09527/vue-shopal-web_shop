<template>

  <div id="user">
    <header>
      <div class="contain">
        <div class="user-img">
          <img src="http://image.ushopal.com/admin/201707/06/1fa81202ffd959e832cf864e5c09a082_1901438309.jpg">
        </div>
        <router-link to="./login"><span class="user-name">请登录／注册</span>
      </router-link>
  </div>
    </header>
    <!--my info-->
    <router-link to="/userInfo">
    <div class="user-item">
        <p @click="msn()">我的信息</p>
    </div>
    </router-link>

    <!--my goods-->
    <router-link to="/order" >
    <div class="user-item">
      <p>我的订单</p>
    </div>
    </router-link>

    <!--my bill-->
    <router-link to="/bill">
    <div class="user-item">
      <p>我的账单</p>
    </div>
    </router-link>


    <router-link to="/kolshop" v-if="is_kol">
      <div class="user-item">
        <p>我是分销商</p>
      </div>
    </router-link>

    <router-link to="/applay_for_kol" v-if="!is_kol">
      <div class="user-item">
        <p>我是分销商</p>
      </div>
    </router-link>

  </div>

</template>

<style lang='scss' rel="stylesheet/scss" scoped>

  @import "../../assets/css/transform";
  #user {
    width: 100%;
    height: 100%;
    header {
      position: relative;
      width: 100%;
      height: px2rem(350px);
      background: url('http://image.ushopal.com/admin/201707/05/7410b9be375669de4ad9be5f7ed8ffa6_677759694.jpg') no-repeat;
      background-position: 50%;
      background-size: cover;
      .contain {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 99;
        margin: auto;
        width: px2rem(650px);
        height: px2rem(200px);
        .user-img {
          width: px2rem(150px);
          height: px2rem(150px);
          border-radius: 50%;
          display: inline-block;
          font-size: 0;
          position: relative;
          img {
            max-width: 100%;
            border-radius: 50%;
          }
        }
        .user-name {
          @include font-dpr(18px);
          font-weight: bold;
          color: #f0f0f0;
          position: absolute;
          top: px2rem(75px);
          margin-left: 20px;
          padding: 0 px2rem(5px);
        }
      }
    }
    .user-item{
       width: 100%;
       height: px2rem(150px);
       background: #FFF;
       display: block;
       margin-top: px2rem(30px);
      font-size: 0px;
      position: relative;

      p{
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        -webkit-transform:translate(-50%,-50%);
        -moz-transform:translate(-50%,-50%);
        text-align: center;
        @include font-dpr(16px);
        color: #232326;
      }
    }
  }
</style>
<script type='text/ecmascript-6'>
  import {getOrder} from '../../axios/order/index'
  export default{
    data(){
      return {
          is_kol:"",
      }
    },
    mounted(){
        //发送请求获取是否是分销商的值(在用户信息中)
        this.is_kol = false;
    },
    methods:{

      msn(){

      }
    }
  };
</script>
