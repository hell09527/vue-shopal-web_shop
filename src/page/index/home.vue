
<template>
  <div id="home" ref="home">

    <div class="wrapper">
      <mt-search
        class="tree"
        v-model="search"
        cancel-text="取消"
        placeholder="搜索">
      </mt-search>
      <mt-swipe :auto="4000" class="swipe">
        <mt-swipe-item>
          <img src="../../assets/images/timg.jpeg">
        </mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/timg2.jpeg"></mt-swipe-item>
      </mt-swipe>
      <div style="width: 100%;">
        <!--?id="+item.goodsId-->
        <div class="goods">
          <h2 @click="test">商品列表</h2>
          <div class="line"></div>
          <ul class="list">
            <li class="item" v-for="(item, index) in picList" :key="index">


              <router-link :to="'/shop/'+item.goodsId">

                <div class="product">
                  <img :src="item.goodsPictureUrl" class="product_img" alt="">

                  <span class="product_text">
                    {{item.goodsName }}

                   </span>
                  <p class="product_info">
                    {{item.salesPrice}}{{item.goodId}}
                    </p>
                </div>

              </router-link>
            </li>
          </ul>
        </div>

      </div>
    </div>


  </div>


</template>
<style lang='scss' rel="stylesheet/scss" scoped>
  @import "../../assets/css/transform";
  /*::-webkit-scrollbar {*/
  /*display: none;!*隐藏滚轮*!*/
  /*}*/
  #home {
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 1rem;
    .wrapper {

      .swipe {
        width: 100%;
        height: 4rem;
        .mint-swipe-item {
          img {
            width: 100%;
            height: auto;
          }
        }
      }
      .tree {
        display: block;
        height: 1rem;
        .mint-searchbar {
          height: 100%;
          padding: 8px 10px;

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
    }

  }

  .tree .mint-searchbar-inner {
    height: .56rem
  }


</style>
<script type='text/ecmascript-6'>


  import {Swipe, SwipeItem, Search} from 'mint-ui';
  import Bscroll from 'better-scroll';

  import  {getHome}  from '../../axios/index/index';
  import {tool} from '../common/tools.js'




  var TOKEN = sessionStorage.getItem('TOKEN');





  var params={


    shareHash:'96fdbb5b269e0bc0326d7e832c246dd877a8b15b',

  }



  export default{
    data(){
      return {
        search: '',
        picList:[]

      }
    },
    created: function () {

      //渲染图片部分
      getHome(params).then((res) => {

        if(res.code==200){




          this.picList= res.data.list

//          this.picList.goodid=this.$route.params.id


          console.log(this.$route.params);
        }



      });
      this._initScroll();

    },
    mounted: function () {

    },
    methods: {
      test(){
        let that = this;
        console.log(that.$route.params);
//  let urlparams = tool.getUrlRequest();
//  console.log("aaa:",urlparams);

      },
      _initScroll () {
        this.$nextTick(() => {
          if(!this.scroll){
            this.scroll = new Bscroll(this.$refs.home, {
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

      }
    },
    components: {}
  }
</script>

