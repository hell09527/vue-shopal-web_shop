<template>
  <div>

    <!--//我的店铺上部分-->
<div class="myshop">


  <div class="srq">
    <span class="sui">+</span>
</div>






</div>



      <!--tab-->
      <mt-navbar v-model="selected" class="navbar">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">综合</mt-tab-item>
        <mt-tab-item id="3">新品</mt-tab-item>
        <mt-tab-item id="4">价格</mt-tab-item>

      </mt-navbar>


      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="goods">

            <ul class="list">
              <li class="item"   v-for="(item, index) in picList" :key="index">
                <router-link :to="'/myparticular/'+item.goodsId">
                  <div class="product">
                    <div class="product_img"
                         style="background-image:url('http://image.ushopal.com/admin/201705/05/a4750fbbe7619f0b7bf4b084f2581039_553054689.jpeg')">
                    </div>
                    <span class="product_text">{{item.goodsName}}</span>
                    <p class="product_info"> ¥{{item.salesPrice}}</p>
                  </div>

                </router-link>
              </li>








            </ul>
          </div>
        </mt-tab-container-item>


        <mt-tab-container-item id="2">

        </mt-tab-container-item>
        <mt-tab-container-item id="3">

        </mt-tab-container-item>
        <mt-tab-container-item id="4">

        </mt-tab-container-item>

      </mt-tab-container>




    <!--<input type="button" value="+ 添加更多商品" class="shop" @click="adding()">-->
    <footersk></footersk>
  </div>


</template>

<script>
//  ,Search
  import { header} from 'mint-ui';
  import Bscroll from 'better-scroll';


  import  {myShop,crClose}  from '../../axios/kolshop/index';
import  {getHome}  from '../../axios/index/index';
  import footersk from "../../components/allbar.vue";

  var TOKEN = sessionStorage.getItem('TOKEN');
  var params={
    TOKEN
  }


var ps={

    TOKEN,
    shareHash:'96fdbb5b269e0bc0326d7e832c246dd877a8b15b',

}





  export default {
    name: 'xxx',

    data(){
      return {
        selected: '1',
          picList:[],

        shopdata:{

        }

      }
    },



    created: function () {


//商品渲染
        getHome(ps).then((res) => {

            if(res.code==200){




                this.picList= res.data.list





            }



        });
    },
      mounted(){

      },
        methods: {
            getshopdata(){
                let _this = this;

                //_this.shopdata = data
            },

          adding(){
            //添加商品
            Ad(lis).then((res) => {

            });

          },



        },
        components: {
          footersk,
        }

    }
</script>


<style lang='scss' rel="stylesheet/scss" scoped>

  @import "../../assets/css/transform";


.myshop{
  width: 100%;
  height: 3.56rem;
  background-color: #fff;
  position: relative;

  .srq{
    top: 1.2rem;
    border: 1px solid #000;
    width: 1.36rem;
    height:1.36rem;
    position: absolute;


    .sui{
      margin-left: .48rem;
      font-weight: 700;
      font-size: .66rem;
      text-align: center;
      line-height: 1.36rem;
      position: absolute;
    }

  }

}




.mint-search {


    height: 100%;
     height: 1rem;
    overflow: hidden;
}



.mint-searchbar-inner {

    padding: 21px 1px;
}

  .mint-searchbar{
    padding: 37px 10px;
  }


  /*插件内容*/
  .navbar {
    .mint-tab-item {
      @include font-dpr(15px);
      padding: px2rem(17px) 0;
      .mint-tab-item-label {
        @include font-dpr(12px);
      }
    }
  }
  .mint-tab-container {
    .mint-tab-container-item {
      .order-item {
        width: 100%;
        min-height: px2rem(200px);
        overflow: hidden;
        box-sizing: content-box;
        border-bottom: 1px solid #cccccc;
        background: #fff;
        margin-top: px2rem(5px);
        position: relative;
        display: block;
        .order-item-wrapper{
          padding: 0 px2rem(20px);
          .top{
            display: flex;
            justify-content: space-between;
            margin-top: px2rem(20px);
            margin-bottom: px2rem(10px);
            @include font-dpr(14px);
            color:#666;
          }
          .item{
            display: flex;
            justify-content: space-between;
            margin-left: px2rem(10px);
            margin-right: px2rem(10px);
            margin-top: px2rem(15px);
            margin-bottom: px2rem(10px);
            @include font-dpr(12px);
            font-weight: bold;
            color: #999999;
            span{
              &:first-child{
                max-width: 60%;
                overflow: hidden; text-overflow:ellipsis; white-space: nowrap;
              }


            }
          }
          .but{
            margin: px2rem(15px) 0;
            @include font-dpr(14px);
            width: px2rem(131px);
            height: px2rem(51px);
            padding: 0 px2rem(12px);
          }
        }
      }
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
</style>
