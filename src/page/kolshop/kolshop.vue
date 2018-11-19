<template>
<div>
  <div>
    <div class="nav">
      <div class="al">TO B总部

</div>



      <router-link to="/creationshop">
      <input type="button" value="创建店铺" class="se" >
      </router-link>
      <router-link to="/myshop">
        <input type="button" value="我的店铺" class="seo">
      </router-link>
  </div>


    <div class="goods">

      <ul class="list">
        <li class="item" v-for="(item, index) in picList" :key="index">

          <router-link :to="'/particular/'+item.number">
            <div class="product">
              <div class="product_img"
                   style="background-image:url('http://image.ushopal.com/admin/201705/05/a4750fbbe7619f0b7bf4b084f2581039_553054689.jpeg')">
              </div>
              <span class="product_text">{{item.name}}</span>
              <p class="product_info"> ¥{{item.price}}</p>
            </div>

          </router-link>
        </li>



      </ul>
    </div>



    <footersk></footersk>





  </div>
</div>
</template>

<script>
  import { Navbar, TabItem } from 'mint-ui';
  import  {Tob}  from '../../axios/kolshop/index';
  import footersk from "../../components/allbar.vue"

  var TOKEN = sessionStorage.getItem('TOKEN');




  var lis={

  }


    export default {


        data(){
            return {
                picList:[]
            }
        },
      created: function () {
        Tob(lis).then((res) => {



       this.picList=  res.data.list

        });







      },
        mounted(){
        },
        methods: {



        },
        components: {
          footersk,
    }

    }
</script>



<style lang='scss' rel="stylesheet/scss" scoped>


  @import "../../assets/css/transform";
  .nav{
    width: 100%;
    height: 3rem;
    background-color: #fff;
    position: relative;
    .al{
    width: 100%;
    height: .88rem;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    line-height: .88rem;




  }
  }

  .goods {
    margin-top: px2rem(30px);
    padding: 0 0.2rem;
    h2 {
      @include font-dpr(14px);
    }
    .line {
      border-top: px2rem(4px) solid rgba(34, 36, 38, .15);
      border-bottom: px2rem(2px) solid rgba(255, 255, 255, .1);
      margin: 10px 0;
      line-height: 1;
      height: 0;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .05em;
      color: rgba(0, 0, 0, .85);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: transparent;

    }

    .list {
      overflow: hidden;
      padding: 0 0.2rem;
      .item {
        padding-top: 15px;
        float: left;
        width: 50%;
        box-sizing: border-box;
        padding-bottom: 4px;
        position: relative;
        .product {
          background-color: white;
          padding: 6px;
          font-size: 0;
          margin-right: px2rem(8px);
          .product_img {
            box-sizing: border-box;
            line-height: 0;
            background-color: transparent;
            width: 100%;
            height: px2rem(250px);
            background-repeat: no-repeat;
            background-position: 0px 0px;
            background-size: 100% 100%;

          }
          .product_text {
            height: px2rem(53px);
            @include font-dpr(12px);
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            word-wrap: break-word;
            word-break: break-all;
            -webkit-line-clamp: 2;
            line-height: px2rem(28px);
            color: #232326;
            margin-top: 5px;
            margin-bottom: 3px;
            padding: 0 4px;

          }
          .product_info {
            height: px2rem(30px);
            color: #f23030;
            display: inline-block;
            padding: 0 5px 0 4px;
            position: relative;
            top: 1px;
            @include font-dpr(14px);
            overflow: hidden;
            margin-top: 5px;
            margin-bottom: 9px;

          }

        }
      }

    }
  }

  .seo{
    position: absolute;
    right: 2rem;
    top: 1.44rem;
    width: 2rem;
    height: 1rem;
  }


  .se{
    position: absolute;
    left: 2rem;
    top: 1.44rem;
    width: 2rem;
    height: 1rem;
  }
</style>
