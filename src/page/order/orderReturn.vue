<template>
 <div id="return">
   <mt-header title="申请退货" class="header">
     <router-link to="/order" slot="left">
       <mt-button icon="back"></mt-button>
     </router-link>
   </mt-header>

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

   <div class="shop-detail con">
     <div class="wrapper">
       <mt-field label="退货原因"
                 placeholder="请填写原因"
                 type="textarea"
                 v-model="textarea"
                 class="fit"></mt-field>
     </div>
   </div>

   <footer>
     <p class="title">商品退回方式：快递至我公司</p>
     <router-link to="/order" >
       <mt-button type="primary">提交</mt-button>
     </router-link>
   </footer>

 </div>
</template>
<style lang='scss' rel="stylesheet/scss" scoped>
  @import '../../assets/css/transform';
  textarea::-webkit-input-placeholder{ /* WebKit*/
    @include font-dpr(12px);
  }
  textarea:-moz-placeholder{ /* Mozilla Firefox 4 to 18 */
    @include font-dpr(12px);
  }
  textarea::-moz-placeholder{ /* Mozilla Firefox 19+ */
    @include font-dpr(12px);
  }
  textarea:-ms-input-placeholder { /* IE 10+ */
    @include font-dpr(12px);
  }

  #return{
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
    .con{
      margin-top: px2rem(20px);
      width: 100%;
      display: block;
      position: relative;
      background: #fff;
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
        .fit{
          //height: px2rem(80px);
          min-height: px2rem(120px);
          .mint-cell-title{
            @include font-dpr(12px);
            width: px2rem(120px);
          }
          .mint-cell-value{
           .mint-field-core{
                height: px2rem(150px);
               @include font-dpr(12px)
           }
          }

        }

      }
    }
    footer{
      text-align: center;
      .title{
         color: indianred;
         @include font-dpr(14px);
         margin: px2rem(20px) 0;
      }
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

  import { header,filed,button} from 'mint-ui';

    export default{
        data(){
            return {
              textarea:""
            }
        }
    };
</script>
