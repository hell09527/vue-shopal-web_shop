<template>

  <div>
  <span> 姓名</span><input type="text" placeholder="请输入姓名" v-model="xm">
    <br>
    <span> 手机号码</span> <input type="text" placeholder="请输入手机号" v-model="hm">

    <br>
    <span> 身份证</span><input type="text" placeholder="请输入身份证号" v-model="ids">
    <br>
    <span>用户账号 </span> <input type="text"  placeholder="请输入用户账号" v-model="zh">

        <br>
    <router-link to="/kolshop">
      <input type="button" value="提交" @click="apply()" class="sed">
    </router-link>


  </div>



</template>

<script>
  import  {Aply}  from '../../axios/kolshop/index';



    export default {
        name: 'xxx',
        data(){
            return {
                xm:"",
                hm:"",
                ids:"",
                zh:"",

            }
        },
        mounted(){
        },
        methods: {
          apply(){

              var  params={

                  "mobile": this.hm,

                  'realName' : this.xm,
                  'idCard' : this.ids,

                  'username' :this.zh

              };
            Aply(params).then(function (res) {

              console.log(res);


            })
          }

        },
        components: {}

    }
</script>


<style lang='scss' rel="stylesheet/scss" scoped>

  @import "../../assets/css/transform";
  span{
    margin-top: .56rem;
    width: 100%;
    height: 1rem;
    font-size: .46rem;
    line-height: 1rem;
    font-weight: 700;
  }
input{
  margin: 0 auto;
  text-align: center;
  width: 100%;
  height: 1rem;
  /*margin-top:1rem;*/

  font-weight: 700;


}

  .sed{
    margin-top: 1rem;
  }


</style>
