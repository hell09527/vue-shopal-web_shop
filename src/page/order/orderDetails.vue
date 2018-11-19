<template>
   <div id="details"  ref="details">
     <mt-header title="订单详情" class="header">
       <router-link to="/order" slot="left">
         <mt-button icon="back"></mt-button>
       </router-link>
     </mt-header>
     <!---->
     <div class="shop con">
        <div class="shop-wrapper">
              <ul class="list">
                 <li class="item">
                   <div class="item-img">
                     <div class="auto">
                       <img src="http://image.ushopal.com/admin/201705/05/a4750fbbe7619f0b7bf4b084f2581039_553054689.jpeg" />
                     </div>
                   </div>
                   <div class="name">
                     <span>CAUDALIE欧缇丽葡萄活性精华爽肤匈牙利皇后水 普通装100ml</span>
                     <span>共计 12 件</span>
                     <span>¥20</span>
                   </div>

                 </li>
                <li class="item">
                  <div class="item-img">
                    <div class="auto">
                      <img src="http://image.ushopal.com/admin/201705/05/a4750fbbe7619f0b7bf4b084f2581039_553054689.jpeg" />
                    </div>
                  </div>
                  <div class="name">

                    <span>CAUDALIE欧缇丽葡萄活性精华爽肤匈牙利皇后水 普通装100ml</span>
                    <span>共计 12 件</span>
                    <span>¥20</span>
                  </div>

                </li>
                <li class="item">
                  <div class="item-img">
                    <div class="auto">
                      <img src="http://image.ushopal.com/admin/201705/05/a4750fbbe7619f0b7bf4b084f2581039_553054689.jpeg" />
                    </div>
                  </div>
                  <div class="name">

                    <span>CAUDALIE欧缇丽葡萄活性精华爽肤匈牙利皇后水 普通装100ml</span>
                    <span>共计 12 件</span>
                    <span>¥20</span>
                  </div>

                </li>
                <li class="item">
                  <div class="item-img">
                    <div class="auto">
                      <img src="http://image.ushopal.com/admin/201705/05/a4750fbbe7619f0b7bf4b084f2581039_553054689.jpeg" />
                    </div>
                  </div>
                  <div class="name">

                    <span>CAUDALIE欧缇丽葡萄活性精华爽肤匈牙利皇后水 普通装100ml</span>
                    <span>共计 12 件</span>
                    <span>¥20</span>
                  </div>

                </li>
              </ul>

             <p class="pay"> 实际付款：¥2500</p>

        </div>
     </div>

     <div class="shop-detail con">
           <div class="wrapper">
                 <ul class="list">
                    <li>
                       订单号：12342141241241
                    </li>

                   <li>
                     下单实际：2016-01-01
                   </li>
                   <li>
                     支付方式：微信支付
                   </li>
                   <li>
                     配送快递：顺丰快递
                   </li>
                 </ul>
           </div>
     </div>
     <div class="transportation con">
        <div class="wrapper"></div>
     </div>
     <div class="salesReturn con">
       <div class="wrapper"></div>
     </div>
     <footer>
       <router-link to="/orderReturn" >
       <mt-button type="primary">申请退货</mt-button>
       </router-link>
     </footer>

   </div>

</template>
<style lang='scss' rel="stylesheet/scss" scoped>
  @import "../../assets/css/transform";

  #details{
    width: 100%;
    height: 100%;
    .con{
      margin-top: px2rem(20px);
      width: 100%;
      display: block;
      position: relative;
      background: #fff;
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
    .shop{

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
    .shop-detail{
       .wrapper{
           padding: px2rem(10px) px2rem(20px);
         .list{
             li{
                 @include font-dpr(14px);
                 margin: px2rem(20px) 0;
                 color: #666;
             }
         }

       }
    }
    .transportation{
       height: px2rem(300px);
       overflow: hidden;
      .wrapper{
        padding: px2rem(10px) px2rem(20px);}
    }
    .salesReturn{
      height: px2rem(300px);
      overflow: hidden;
      .wrapper{
        padding: px2rem(10px) px2rem(20px);}
    }
    footer{
      text-align: center;
      .mint-button{
        width: 80%;
        height: px2rem(80px);
        padding: 0 px2rem(12px);
        @include font-dpr(16px)
      }
      margin-bottom: px2rem(120px);
      margin-top: px2rem(20px);
    }
  }
</style>
<script type='text/ecmascript-6'>
  import {header,button} from 'mint-ui'
  import Bscroll from 'better-scroll'
    export default{
        data(){
            return {

            }
        },
      methods:{
        _initScroll () {
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new Bscroll(this.$refs.details, {
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
      }
    };
</script>
