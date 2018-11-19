<template>
  <div id="payOrder">
    <mt-header title="订单支付" class="header">
      <router-link to="/shoppingCart" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <!--money-->
    <div class="money">
      <p>总价:
        <span style="color: indianred" v-text="pluil"></span>
      </p>
    </div>

    <!---->
    <div class="cart-list">
      <div class="wrapper">
        <ul class="list">
          <li class="item">
            <div class="checkbox">
              <input type="radio" name="cart">
            </div>
            <div class="item-img">
                <img src="../../assets/images/weixin.svg"  />
            </div>
          </li>


          <li class="item">
            <div class="checkbox">
              <input type="radio" name="cart">
            </div>
            <div class="item-img">
              <img src="../../assets/images/zhi.svg"   />
            </div>
          </li>

        </ul>
      </div>

    </div>
<footer>
  <router-link to="/order">
  <mt-button type="danger" @click="back()">支付</mt-button>
  </router-link>
</footer>


  </div>
</template>
<style lang='scss' rel="stylesheet/scss" scoped>
  @import "../../assets/css/transform";

  #payOrder {
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
    .money{
      width: 100%;
      height: px2rem(150px);
      display: inline-block;
      font-size: 0;
      position: relative;
      background: #FFffff;
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
    .cart-list{
      width: 100%;
      overflow: hidden;
      background: #fff;
      margin-top: px2rem(20px);
      .wrapper{
        padding: px2rem(10px) px2rem(100px);
        .list{
          .item{
            width: 100%;
            overflow: hidden;
            display: flex;
            margin-top: px2rem(25px);
            margin-bottom: px2rem(25px);
            justify-content:space-between;
            .item-img{
              width: px2rem(60px);
              position: relative;
                img{
                  max-width: 100%;
              }


            }

            .checkbox{
              margin-right: px2rem(50px);
              position: relative;
              input[type='radio']{
                width: px2rem(30px);
                height: px2rem(30px);
                margin-top: px2rem(15px);
              }
            }

          }
        }
      }

    }
    footer{
      text-align: center;
      margin-top: px2rem(30px);
      .mint-button{
        width: 80%;
        height: px2rem(80px);
        padding: 0 px2rem(12px);
        @include font-dpr(16px)
      }
    }

  }
</style>
<script type='text/ecmascript-6'>
  import {header, button} from 'mint-ui';
  import Bscroll from 'better-scroll'
  import  {boomPn }  from '../../axios/index/index';

  export default{
    data(){
      return {
          pluil:[],

          Bigblend:[]
      }
    },
    created: function () {
        let that = this;

        this.pluil=that.$route.params.pr


        let   information=[]

        for(let i=0;i<=this.$store.state.newslist.length-1;i++){


        let bigblend=[]

            if( this.$store.state.newslist[i].isSelect==true){

                information.push(this.$store.state.newslist[i]);
                console.log(information);
                information.forEach((v,i)=>{
                    let needinfo={};
                    needinfo.goodsId=information[i].goodsId;
                    needinfo.quantity= information[i].totalQuantity;
                    needinfo.shopHash=information[i].shareHash;

                    console.log("needinfo:",needinfo);
                    bigblend.push(needinfo);



                })
                    this.Bigblend=bigblend
            }


        }
        this.construction =information




    },
    methods:{
      back(){



          var username=  this.$store.state.newsname

          var id=this.$store.state.id




      var    goods=JSON.stringify(this.Bigblend)



          var params={
              "username" :18201720262,
              goods,
              address:id
          };

        boomPn (params).then((res) => {


  });




      }
    }


  };
</script>
