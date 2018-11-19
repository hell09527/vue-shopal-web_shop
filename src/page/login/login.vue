<template>
  　
  <div id="login">

    <div class="contain">

      <mt-field label="手机" placeholder="请输入手机号" v-model="username" class="phone"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" class="pass"></mt-field>
      <p>
        <router-link to="/register"><a href="javascript:void(0)">注册</a></router-link>
      </p>
      <mt-button type="primary" class="login" @click="login()">登录</mt-button>
    </div>


  </div>
</template>

<style lang='scss' rel="stylesheet/scss" scoped>

  @import "../../assets/css/transform";

  input::-webkit-input-placeholder { /* WebKit*/
    @include font-dpr(12px);
  }

  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    @include font-dpr(12px);
  }

  input::-moz-placeholder { /* Mozilla Firefox 19+ */
    @include font-dpr(12px);
  }

  input:-ms-input-placeholder { /* IE 10+ */
    @include font-dpr(12px);
  }

  #login {
    width: 100%;
    height: 100%;

    .contain {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 99;
      margin: auto;
      width: px2rem(650px);
      height: px2rem(500px);
      text-align: center;
      img {
        width: px2rem(280px);
        height: auto;
        position: relative;
        top: px2rem(-60px);
      }
      .phone {
        height: px2rem(80px);
        .mint-cell-title {
          @include font-dpr(12px);
          width: px2rem(105px);
        }
        .mint-cell-value {
          height: 80%;
          input {
            height: 80%;
            padding: 5px 0;
            @include font-dpr(12px);

          }
          .mint-field-clear {
            .mintui {
              @include font-dpr(14px);
            }
          }
        }
      }
      .pass {
        height: px2rem(80px);
        .mint-cell-title {
          @include font-dpr(12px);
          width: px2rem(105px);
        }
        .mint-cell-value {
          height: 80%;
          input {
            height: 80%;
            padding: 5px 0;
            @include font-dpr(12px);

          }
          .mint-field-clear {
            .mintui {
              @include font-dpr(14px);
            }
          }
        }
      }

      p {
        text-align: left;
        margin: px2rem(20px) 0;
        a {
          color: #26a2ff;
          font-weight: 500;
          @include font-dpr(12px);

        }
      }
      .login {
        width: 100%;
        height: px2rem(60px);
        @include font-dpr(18px);
      }

    }
  }

</style>
<script type='text/ecmascript-6'>
  import {Button, Field, Toast} from 'mint-ui';
  import {authenicator,getUser} from '../../axios/login/index'
  export default{
    data(){
      return {
        username: '',
        password: '',

      }
    },
      mounted(){



      },
    methods: {
      login(){

        if (this.username && this.password) {


            this.$store.state.newsname=this.username
           this.pubilc();

        } else {
          this.Toast('请填写完整')
        }


      },
      pubilc(){
        let jse = new this.$jsEncrypt.JSEncrypt();
        jse.setPublicKey(`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtrLTcs4emWc/grh+Bbuv
dX2jxionGtSg6m4gy1ybTrHOHMmtuETgbtKhtyGkEcES8XOdlIBRQiu5qP7yAaaQ
JidYMspSe23A+oc66RJfKCE8Cg0DIrG8DOfY+YGp+fehr+TyoYsDjgNrca9Pi3n4
LZ4AZabyuT/2F0Cn5IHTWbI+1Bcoy4uRBUmmAmMSJC7+3UMLqb/RM1BTyRAEZv6P
AFyOOp8MR3+Zs3B+9gpi3z32bZpH9FpBX0Zb0sMnheF5KlLQ3Fp1pKOMmNXJCAsz
q4hmX6t1SuTbXGej9nLDwMRXETAkYmQAAROqkq5pPia9pGmRx+Q6J/cjhzsunV2a
qwIDAQAB
-----END PUBLIC KEY-----`);
        let decrypted =  jse.encrypt(this.password);
        // 设置需要加密的字符串
         authenicator({
           USERNAME:this.username,
           AUTHENTICATOR_TOKEN:decrypted
         }).then( (res)=>{
             if(res.code ===200){
                 let data = res.data;
               console.log(data);

               this.$store.dispatch('LoginByToken', data.token).then(()=>{
                   this.$router.push('home');



               })
             }else {
               this.Toast(res.message)
             }

         })
      },


      Toast(val){
        Toast({
          message: val,
          position: 'top',
          duration: 1000
        });
      }
    }
  };
</script>
