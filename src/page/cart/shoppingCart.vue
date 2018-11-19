<template>

  <div id="cart" ref="cart">
    <mt-header title="购物车" class="header">
    </mt-header>

    <div class="cart-list">
      <div class="wrapper">
        <ul class="list">
          <li class="item"   v-for="(item, index) in picLisl" :key="index">
            <div class="checkbox">



         <input type="checkbox" name="cart" :checked="item.isSelect" @click="singshopseleted(item)" >

            </div>
            <div class="item-img">
              <div class="auto">
                <img src="http://image.ushopal.com/admin/201705/05/a4750fbbe7619f0b7bf4b084f2581039_553054689.jpeg" />
              </div>
            </div>
            <div class="name">
              <span>{{item.goodsName}}</span>
              <span>¥{{item.salesPrice*item.totalQuantity}}</span>




                <ul class="readd">
                    <li> <a href="javascript:;" @click="singshop(item,flase)">-</a></li>
                    <li><input type="text" value="0" v-model="item.totalQuantity"></li>
                    <li><a href="javascript:;" @click="singshop(item,true)">+</a></li>
                </ul>
                <div class="del">
                    <a  href="javascript:;" @click.prevent="del(item.cartId)">删除</a>
                </div>







</div>
          </li>
        </ul>
      </div>

    </div>
    <!--shoppingcart-->
    <div class="shopping-cart-move">
      <div class="auto">
        <div class="wrapper">
          <label  class="label">
            <input type="checkbox" name="cart" :checked="isSelectAll" @click="SelectAll(isSelectAll)"></label>
            <router-link to="/shoppingCart">
          <span @click="delall()">批量购物车</span>
            </router-link>
          <span>总价： <span style="color: indianred">¥{{totalPrice}}</span></span>
        </div>


      </div>
      <router-link :to="'/tallyOrder/'+ 0">
        <mt-button type="danger" class="mint-buttons" @click="settle()">结算</mt-button>
      </router-link>

    </div>
  </div>
</template>
<style lang='scss' rel="stylesheet/scss" scoped>
  @import "../../assets/css/transform";
  #cart{
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
    .cart-list{
      width: 100%;
      overflow: hidden;
      background: #fff;
      .wrapper{
        padding: px2rem(10px) px2rem(20px);
        .list{
          .item{
            width: 100%;
            overflow: hidden;
            display: flex;
            margin-top: px2rem(25px);
            margin-bottom: px2rem(25px);
            justify-content: space-between;
            .item-img{
              max-width: 50%;
              height: 100%;
              .auto{
                width: px2rem(200px);
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
                &:nth-child(2){
                  color: indianred;
                  margin-bottom: px2rem(10px)
                }

              }

              .val{
                background: #fff;
                position: relative;
                overflow: hidden;
                top: px2rem(2px);
                input[type='number']{
                  width: 100%;
                  text-align: center;
                  height: px2rem(35px);
                  font-weight: bold;
                  margin: 0;
                  position: absolute;
                  color: #333;
                  @include font-dpr(14px);
                }
              }

            }
            .checkbox{
              margin-right: px2rem(20px);
              position: relative;
              input[type='checkbox']{
                width: px2rem(30px);
                height: px2rem(30px);
                margin-top: px2rem(60px);
              }
            }

          }
        }
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
  .nuu{
   span{
     margin-left: .2rem;
     font-size: .33rem;
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
    .del{
        display: block;
        margin-top: .23rem;
    }
</style >
<script type='text/ecmascript-6' scoped>
  import {header,button} from 'mint-ui';

  import Bscroll from 'better-scroll'
  import  {showCart,adCart,dlCart,delCart}  from '../../axios/cart/shoppingCart';
  import Vue from "vue"

  var TOKEN = sessionStorage.getItem('TOKEN');



  var  params={
    'limit' : 20,
    TOKEN,
  };
  export default{
    data(){
      return {

          picLisl:[],
          CartId:"",
          number:1,
          isSelectAll:false,
         totalPrice:'0'

      }
    },

    created: function () {

      this.invoking()


    },
      mounted() {
      },

      methods:{
          invoking(){
              showCart(params).then((res) => {
                  if(res.code==200){

                      res.data.list.forEach((value,index)=>{

                          value.isSelect = false;

                      })
                      console.log(res.data.list);
                      this.picLisl= res.data.list



                  }



              });
          },
      _initScroll () {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new Bscroll(this.$refs.cart, {
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
          del(id){

              var  lis={
                  cartIds:id,
                  TOKEN,
              };

              delCart(lis).then((res) => {

              });
              this.$store.commit("del", id);

              this.picLisl.splice(this.picLisl.findIndex(v=>{
                  return v.id == id;
              }), 1);
          },
          SelectAll(flag){
//              按钮全选
            this.isSelectAll=!flag

              this.picLisl.forEach(v => {
                  if(v.isSelect==false){
                      this.$set(v,'isSelect',!flag)
                  }else{
                      v.isSelect=!flag
                  }
              })
               this.gettotalPrice()

                this.hasSelectedAll()
          },

          gettotalPrice(){
              //获取总价格
              let totalPrice=0;
              this.picLisl.forEach((value,index)=>{

                  if(value.isSelect){

                      totalPrice+=value.salesPrice*value.totalQuantity
                  }

              })


              this.totalPrice=totalPrice


          },

          hasSelectedAll(){
            //按钮反选
             let flag=true;

              this.picLisl.forEach((value,index)=>{

                  if(!value.isSelect){

                      flag=false
                  }
                  this.isSelectAll=flag;

              })

          },
          singshopseleted(shop){
              if(typeof shop.isSelect==="undefied"){
                  this.$set(shop,"isSelect",true)
              }else{
                  shop.isSelect=!shop.isSelect
              }
              this.gettotalPrice()
              this.hasSelectedAll()
          },
            //          清空购物车
          delall(){
      var   letterid=[]

              for(let i=0;i<=this.picLisl.length-1;i++){
                     if(this.picLisl[i].isSelect==true){
                     letterid.push(this.picLisl[i].cartId)
            }letterid};
                     var cartId=""
            var  naId=[]
              for(let i=0;i<=letterid.length-1;i++){

                  naId.push(letterid[i])


            //将需要删除的ID储存到store然后储存到
                  this.$store.state.Delid = naId

                  cartId+=letterid[i]+","
              }


              var  lis={
                  cartIds:cartId,
                  TOKEN,
              };

              delCart(lis).then((res) => {

              });


              this.invoking()

          },
          //解决加减问题
          singshop(shop,flag){

              if(flag){

                  shop.totalQuantity+=1;

              }else{
              if(shop.totalQuantity<=1){
                  shop.totalQuantity=1

                  return
              }
                  shop.totalQuantity-=1;
              }
              this.gettotalPrice()

          },
          settle(){

              this.$store.state.totalPrice=this.totalPrice

              let   information=[]





              for(let i=0;i<=this.picLisl.length-1;i++){



                  if( this.picLisl[i].isSelect==true){

                      information.push(this.picLisl[i])

                  }


              }

              this.$store.state.newslist = this.picLisl
          }



    },



//      computed: {
//          totalCount() {
//              //获取到了所有被选中的商品信息
//              var selectedGoods = this.picLisl.filter(function(v) {
//                  return v.isSelect;
//              })
//
//              //获取被选中的商品的数量 求总和
//              var sum = 0;
//              selectedGoods.forEach(v => {
//                  sum += this.$store.getters.counts[v.id];
//              })
//              return sum;
//          },
//          totalPrice() {
//              var selectedGoods = this.picLisl.filter(function(v) {
//                  return v.isSelect;
//              })
//
//              var price = 0;
//              selectedGoods.forEach(v => {
//                  price += this.$store.getters.counts[v.id] * v.salesPrice;
//              })
//              return price;
//
//          }
//      }
  };
</script>

