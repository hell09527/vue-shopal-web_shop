<template>
  <div id="tallyOrder" ref="tallyOrder">
    <mt-header title="订单结算" class="header">
      <router-link to="/shoppingCart" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!--address-->
    <router-link to="/Address">

    <div class="address" >
      <div class="wrapper">
        <h1>默认地址</h1>
        <span>{{picList.name}}</span>
        <span>{{picList.telephone}}</span>
        <p>{{picList.addressDetail}}</p>
      </div>
    </div>
    </router-link>



    <!--shop-->
    <div class="shop con">
      <div class="shop-wrapper">
        <ul class="list">
          <li class="item" v-for="(item, index) in construction" :key="index">
            <div class="item-img">
              <div class="auto">
                <img :src="item.goodsPictureUrl" class="product_img" alt="">
              </div>
            </div>
            <div class="name">
              <span> {{item.goodsName }}</span>
              <span>共计 {{item.totalQuantity}} 件</span>
              <span>¥{{item.salesPrice}}</span>
            </div>

          </li>

        </ul>

      </div>
    </div>


    <!--shoppingcart-->
    <div class="shopping-cart-move">
      <div class="auto">
        <div class="wrapper">
          <span>实付款：
            <span style="color: indianred" v-text="totalPrice"></span></span>
        </div>


      </div>
      <router-link :to="'/payOrder/'+ totalPrice">
        <mt-button type="danger" class="mint-buttons">立即下单</mt-button>
      </router-link>

    </div>

  </div>
</template>
<style lang='scss' rel="stylesheet/scss" scoped>
  @import "../../assets/css/transform";
  #tallyOrder {
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
    .address {
      width: 100%;
      display: block;
      overflow: hidden;
      background: #FFffff;
      .wrapper {
        padding: px2rem(25px) px2rem(15px);
        color: #666;
        h1 {
          @include font-dpr(16px);
          color: #333333;
          margin-bottom: px2rem(12px);
        }
        span {
          @include font-dpr(14px);

        }
        p {
          @include font-dpr(14px);
          line-height: 1.2;
          margin-top: px2rem(8px);
        }
      }
    }
    .shop{
      width: 100%;
      display: block;
      overflow: hidden;
      background: #FFffff;
      margin-top: px2rem(20px);
      .shop-wrapper{
        padding: px2rem(10px) px2rem(20px);
        .list{
          .item{
            width: 100%;
            overflow: hidden;
            display: flex;
            margin-top: px2rem(10px);
            margin-bottom: px2rem(10px);
            height: px2rem(200px);
            justify-content: space-between;
            .item-img{
              max-width: 50%;
              height: 100%;
              .auto{
                width: px2rem(250px);
                img{
                  width: 100%;
                  height: auto;
                  border-radius: 2px;
                }
              }
            }
            .name{
              vertical-align: middle;
              margin-left: px2rem(5px);
              overflow: hidden;
              span{
                color: #666;
                font-weight: 600;
                display: block;
                @include font-dpr(14px);
                line-height: px2rem(35px);
                &:last-child{
                  color: indianred;
                }

              }
            }

          }
        }
      }
      .pay{
        @include font-dpr(16px);
        color: indianred;
        font-weight: bold;
        margin: px2rem(10px) 0;
      }
    }
    .shopping-cart-move{
      margin-top: px2rem(10px);
      margin-bottom: px2rem(120px);
      width: 100%;
      background: #fff;
      height: px2rem(100px);
      display: flex;
      justify-content: space-between;
      .auto{
        width: 70%;
        height: 100%;
        .wrapper{
          padding: 0 px2rem(20px);
          margin-top: px2rem(30px);
          display: flex;
          justify-content: space-between;
          @include font-dpr(16px);
          .label{
            &::after {
              content: '全选';
              /*利用attr可以减少css代码量,data-name写在html部分的label属性里*/
              display: inline-block;
              position: relative;
              vertical-align: middle;
              top: px2rem(-6px);
              left: px2rem(2px);
            }
          }
          input[type='checkbox']{
            width: px2rem(30px);
            height: px2rem(30px);
          }
        }
      }
      a{
        width: 30%;
        height: 100%;
        .mint-buttons{
          width: 100%;
          height: 100%;
          padding: 0 px2rem(12px);
          @include font-dpr(16px);
          border-radius: 0;
        }
      }


    }


  }
</style>
<script type='text/ecmascript-6'>
  import {header, button, Cell} from 'mint-ui';
  import Bscroll from 'better-scroll'
  import {xumo} from '../../axios/order/index'






  var TOKEN = sessionStorage.getItem('TOKEN');

  var  params={

    TOKEN



  };
  export default{
    data(){
      return {pluil:"",
          picList:[],
          construction:[],
          information:[],
          totalPrice:""




      }
    },
    created: function () {
        let that = this;

        var plui=that.$route.params.pr

if(plui==0){
    xumo({}).then((res) => {

        if (res.code == 200) {


            this.picList = res.data.res[0]


            this.$store.state.id=this.picList.id


        }
    });
}else{
    xumo({addressId:plui}).then((res) => {

        if (res.code == 200) {


            this.picList = res.data.res[0]


            this.$store.state.id=this.picList.id


        }
    });
}






    },
      mounted(){



          this.totalPrice=this.$store.state.totalPrice




        let   information=[]

    for(let i=0;i<=this.$store.state.newslist.length-1;i++){



        if( this.$store.state.newslist[i].isSelect==true){

            information.push(this.$store.state.newslist[i])

        }

        this.construction= information

    }




      },
    methods:{
      _initScroll () {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new Bscroll(this.$refs.tallyOrder, {
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

    },
      computed:{

      },

  };
</script>
