<template>
  <div id="shop" ref="shop">

    <mt-header title="商品详情" class="header">
      <router-link to="/myshop" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="banner">
      <img src="../../assets/images/640.jpg"/>
    </div>
    <div class="shoppingCar">
      <div class="wrapper">
        <p class="name">美国Aveeno baby艾维诺婴儿燕麦乳霜宝宝滋润保湿新生儿护肤霜2000ml* 套装</p>
        <p class="pay">¥80</p>
        <div class="cart">
          <router-link to="./myshop">
            <mt-button type="danger" @click="Xiony()">下架商品</mt-button>
          </router-link>


        </div>
      </div>

      <div class="imgDeatil">
        <img src="../../assets/images/5848d1b8N6354858b.jpg">
        <img src="../../assets/images/584900d6N7fbefaf6.jpg">
        <img src="../../assets/images/584900d6N7fbefaf6.jpg">
      </div>

    </div>

    <footersk></footersk>
  </div>

</template>
<style lang='scss' rel="stylesheet/scss" scoped>
  @import "../../assets/css/transform";

  #shop {
    width: 100%;
    height: 100%;
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
            padding: 0px 3.16rem;
            @include font-dpr(16px)
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
</style>
<script type='text/ecmascript-6'>

  import {header,button} from 'mint-ui';
  import Bscroll from 'better-scroll'
  import  {getShop,Xiony}  from '../../axios/index/shop';
  import footersk from "../../components/allbar.vue"

  var  params={goodsId : 1,
  };
  var TOKEN = sessionStorage.getItem('TOKEN');






  export default{
    data(){
      return {}

    },
    created:function () {

      getShop(params).then(function (res) {

        console.log(res);


      })
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
      Xiony(){

          let that = this;

          this.pluil=that.$route.params.id
          var  list={

              "goods": this.pluil,


              shopHash:"96fdbb5b269e0bc0326d7e832c246dd877a8b15b",


          };


        Xiony(list).then((res) => {





        });
      }

    },

    components: {
      footersk,
    }
  }

</script>
