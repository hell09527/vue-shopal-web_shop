<template>
 <div id="info">
   <mt-header title="我的信息" class="header">
     <router-link to="/user" slot="left">
       <mt-button icon="back"></mt-button>
     </router-link>
   </mt-header>
     <mt-cell :title="userCellTit2" :label="userCellLabel2"   class="user-cell" to="/userInfo" is-link></mt-cell>
     <mt-cell :title="userCellTit3" :label="userCellLabel3"   class="user-cell" to="/Address" is-link></mt-cell>

 </div>
</template>
<style lang='scss' rel="stylesheet/scss" scoped>
  @import "../../assets/css/transform";
  #info{
     .header{
        @include font-dpr(14px);
        height: px2rem(74px);
       .mint-button{
         .mintui{
           @include font-dpr(14px);
           padding: 0 px2rem(8px);
         }
         height: auto;
       }

     }
    .user-cell{
      min-height: px2rem(110px);
      .mint-cell-allow-right::after{
        width: px2rem(12px);
        height: px2rem(12px);
      }
       .mint-cell-wrapper{
         .mint-cell-title{
           @include font-dpr(16px);
           .mint-cell-label{
             @include font-dpr(12px);
             margin-bottom: 10px;
             margin-top: 10px;
             overflow: hidden; text-overflow:ellipsis; white-space: nowrap;
             max-width: 60%;
           }
         }

       }
    }
  }
</style>
<script type='text/ecmascript-6'>
   import {header,Cell} from 'mint-ui'
   import  {userRe}  from '../../axios/user/user';

   var TOKEN = sessionStorage.getItem('TOKEN');

   var parmas={
     TOKEN
   }
    export default{
        data(){
            return {
              userCellTit2:'账号',
              userCellLabel2:'17765155013',
              userCellTit3:'地址管理',
              userCellLabel3:'四川成都市海清路天府一区601号61大啊对方的撒繁华的撒娇开发哈市'
            }
        },
      created: function () {


        userRe(parmas).then((res) => {

        });




      },
    };
</script>
