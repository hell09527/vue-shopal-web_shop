<template>
  <div>
    <mt-header title="个人信息" class="header">
      <router-link to="/dinfo" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <ul>
      <li v-for="(item, index) in List" :key="index">
        <span>店铺名:</span>
        <p>{{item.shopName}}</p>
        <div   @click="close(item.shopName)" class="kol">关闭店铺</div></li>




    </ul>
    <footersk></footersk>
  </div>

</template>

<script>
    import footersk from "../../components/allbar.vue";
    import  {Tobuser}  from '../../axios/kolshop/index';
    import  {myShop,crClose}  from '../../axios/kolshop/index';
    import  {getHome}  from '../../axios/index/index';


    var TOKEN = sessionStorage.getItem('TOKEN');
    var params={
        TOKEN
    }
    export default {
        name: 'xxx',
        data(){
            return {
                List:[]
            }
        },
        mounted(){
        },
        created: function () {

//        我所存在的商铺
            myShop(params).then((res) => {

                res.data.list[0].id
                this.List=res.data.list


            });

            Tobuser(params).then((res) => {





            });


        },
        methods: {
            close(shops){
                //关闭店铺

                var  lis={

                    shopHash:"96fdbb5b269e0bc0326d7e832c246dd877a8b15b",

                    shopName:shops

                }
                crClose(lis).then((res) => {

                });
            } ,
        },
        components: {
            footersk,
        }

    }
</script>

<style lang='scss' rel="stylesheet/scss" scoped>
  @import "../../assets/css/transform";
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
  ul>li{
    width: 100%;
    border-bottom: 1px solid #000;
    height: 2rem;
    background-color: #fff;

    .kol{
      margin-top: 20px;
     width: 2rem;
      height: .45rem;
      color: #000;
      right: 0;
      margin-right: .33rem;


}
    span{

      position: absolute;
      left: 1rem;
      font-size: 50px;
      font-weight: 700;
      line-height: 2rem;
    }
    p{
      position: absolute;
      right: 1.55rem;
      font-size: 40px;

      line-height: 2rem;

    }
  }

</style>
