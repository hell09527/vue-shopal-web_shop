<template>
  <div>
    <mt-header title="个人信息" class="header">
      <router-link to="/dinfo" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <ul>
      <li><span>身份证:</span>   <p>76287372XXXX46578</p> </li>
      <li><span>账号:</span> <p>1231446478885</p></li>
      <li><span>地址管理:</span> <p>上海杨浦区</p></li>
      <li><span></span></li>
    </ul>
    <footersk></footersk>
  </div>

</template>

<script>
  import footersk from "../../components/allbar.vue";
  import  {Tobuser}  from '../../axios/kolshop/index';


  var TOKEN = sessionStorage.getItem('TOKEN');
  var params={
    TOKEN
  }
    export default {
        name: 'xxx',
        data(){
            return {}
        },
        mounted(){
        },
      created: function () {


        Tobuser(params).then((res) => {





        });


      },
        methods: {},
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
