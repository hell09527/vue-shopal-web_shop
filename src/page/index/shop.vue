<template>
  <div id="shop" ref="shop">
    <mt-header title="商品详情" class="header">

      <router-link to="/home" slot="left">

        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="banner">
        <img :src="Info.album[0].url"/>
    </div>
    <div class="shoppingCar">
      <div class="wrapper">
        <p class="name">美国Aveeno baby艾维诺婴儿燕麦乳霜宝宝滋润保湿新生儿护肤霜2000ml* 套装</p>
        <p class="pay">¥{{Info.salesPrice}}</p>
        <div class="cart">
          <mt-button type="danger" @click="addToCart()">加入购物车</mt-button>

            <span>购物车数量:</span>
            <ul class="readd">
                <li> <a href="javascript:;">-</a></li>
                <li><input type="text" value="1"></li>
                <li><a href="javascript:;">+</a></li>
            </ul>
          </div>



      </div>






      <div class="imgDeatil">
        <img src="../../assets/images/5848d1b8N6354858b.jpg">
        <img src="../../assets/images/584900d6N7fbefaf6.jpg">
        <img src="../../assets/images/584900d6N7fbefaf6.jpg">
      </div>

    </div>
  </div>
</template>
<style lang='scss' rel="stylesheet/scss" scoped>
  @import "../../assets/css/transform";

  #shop {
    width: 100%;
    height: 100%;
    input{
      margin-top: 0px;
    }
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
    .banner {
      width: 100%;
      overflow: hidden;
      display: block;
      height: px2rem(640px);
      img {
        width: 100%;
        max-height: 100%;
        vertical-align: middle;
      }
    }
    .shoppingCar{
      margin-top: px2rem(20px);
      background: #fff;
      width: 100%;
      position: relative;
      .wrapper{
        padding: px2rem(10px) px2rem(15px);
        .name{
          line-height: 1.2;
          @include font-dpr(16px);
          color:#051b28;
        }
        .pay{
          margin: px2rem(12px) 0;
          line-height: 1;
          color: #ff5000;
          @include font-dpr(16px);
          font-weight: bold;
        }
        .cart {
          margin: px2rem(12px) 0;
          display: flex;
          justify-content: space-between;
          .mint-button{
            height: px2rem(64px);
            padding: 0 px2rem(12px);
            @include font-dpr(16px)
          }
          .nums{
            margin-right:.45rem;





          }
        }

      }
    }
    .imgDeatil{
      margin-top:px2rem(60px);
      margin-bottom: px2rem(120px);
      width: 100%;
      overflow: hidden;
      img{
        width: 100%;
        max-height: 100%;
      }
    }
  }

  .readd{
      li{


          background-color: #ccc;
          float: left;
          a{
              display: block;
              width: .44rem;
              height: .44rem;
              color: #fff;
              text-align: center;

          }
          input{
              width: 1rem;
              padding-left: 40%;
          }
      }
  }

</style>
<script type='text/ecmascript-6'>
  import {header,button} from 'mint-ui';
  import Bscroll from 'better-scroll'
  import  {getShop,addCart}  from '../../axios/index/shop';
  var TOKEN = sessionStorage.getItem('TOKEN');

  export default{
    data(){
      return {
        pluil:[],

          Info:[]
      }

    },


    created:function () {
      let that = this;

      this.pluil=that.$route.params.id

      var  params={
        goodsId:this.pluil
      };
      getShop(params).then(function (res) {
            that.Info=res.data



      })



        var  list={

            goodsId:this.pluil,
            'quantity' : "1",
            'shopHash' :"9fed7eb63835b2f37fad3140d6c423e5ba0aea58",
            TOKEN,

        };
    },
    mounted: function () {

    },
    methods: {
      _initScroll () {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new Bscroll(this.$refs.shop, {
              // better-scroll 会将点击事件去掉，要在这里开启，同时点击在PC 会被执行两次，要在这里控制
              click: true
            });
            this.scroll.on('touchend', (pos) => {
              if (pos.y > 50) {
                //this._initScroll()
                console.log("!")
              } else {
                this.scroll.refresh()
              }
            })
          }
        })

      },
        addToCart(){
            //获取用户选择的数量

            //将当前商品的信息，以及购买数量存入购物车内

            this.$store.commit("addToCart", {id: this.$route.params.id, count: 1})


            let that = this;

            this.pluil=that.$route.params.id


            var  list={

                goodsId:this.pluil,
                'quantity' : 1,
                'shopHash' :"96fdbb5b269e0bc0326d7e832c246dd877a8b15b",
                TOKEN,

            };
            addCart(list).then((res) => {
                console.log(res);
            });




      }
    },

  }

</script>
