
<template>
  <div id="order" ref="order">
    <mt-header title="我的订单" class="header">
      <router-link to="/dinfo" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!--tab-->
    <mt-navbar v-model="selected" class="navbar">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">已完成</mt-tab-item>
      <mt-tab-item id="3">待收货</mt-tab-item>
      <mt-tab-item id="4">已退货</mt-tab-item>
      <mt-tab-item id="5">退货中</mt-tab-item>
    </mt-navbar>


    <!-- tab-container -->
    <mt-tab-container v-model="selected">


      <mt-tab-container-item id="1">


        <div class="order-item" v-for="(item, index) in picList" :key="index">
          <div class="order-item-wrapper">

            <div class="top">
              <span>订单号：{{item.orderNo}}</span>
              <span>{{item.expressStatus}}</span>
            </div>
            <div class="item">
              <span>AVEENO</span>
              <span>x {{item.totalAmount}}</span>
            </div>
            <div class="item">
              <span>AVEENO</span>
              <span>x {{item.totalAmount}}</span>


              <div class="tho" @click="dlorder()">删除</div>
            </div>

            <router-link to="/orderDetails">
              <mt-button type="primary" class="but">查看</mt-button>
            </router-link>

          </div>
        </div>





      </mt-tab-container-item>


      <mt-tab-container-item id="2">
        <div class="order-item">
          <div class="order-item-wrapper">

            <div class="top">
              <span>订单号：12341312312423</span>
              <span>已完成</span>
            </div>
            <div class="item">
              <span>AVEENO</span>
              <span>x 10</span>
            </div>
            <div class="item">
              <span>AVEENO</span>
              <span>x 10</span>

              <input type="button"@click="dlorder()" value="删除">

            </div>

            <router-link to="/orderDetails">
              <mt-button type="primary" class="but">查看</mt-button>
            </router-link>

          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="order-item">
          <div class="order-item-wrapper">

            <div class="top">
              <span>订单号：8465323323222</span>
              <span>待收货</span>
            </div>
            <div class="item">
              <span>AVEENO</span>
              <span>x 10</span>
            </div>
            <div class="item">
              <span>AVEENO</span>
              <span>x 10</span>



            </div>

            <router-link to="/orderDetails">
              <mt-button type="primary" class="but">查看</mt-button>
            </router-link>

          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">

      </mt-tab-container-item>
      <mt-tab-container-item id="5">

      </mt-tab-container-item>
    </mt-tab-container>


  </div>
</template>
<style lang='scss' rel="stylesheet/scss" scoped>
  @import "../../assets/css/transform";

  #order {
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
  }


</style>
<script type='text/ecmascript-6'>
  import {header} from 'mint-ui'
  import Bscroll from 'better-scroll'
  import  {Tobubill}  from '../../axios/kolshop/index';


  var TOKEN = sessionStorage.getItem('TOKEN');
  var params={
    TOKEN
  }

  export default{
    data(){
      return {
        selected: '1',
        picList:[]

      }
    },
    mounted(){
      this.orderIn()
    },
    created:function () {
      Tobubill(params).then((res) => {


        if(res.code==200){




          this.picList= res.data.list

        }


      });
    },
    methods: {
      _initScroll () {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new Bscroll(this.$refs.order, {
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

      check(value){
        let a = this.selected;
        console.log(a)
      },
      orderIn(){

      }

    },
  };
</script>
