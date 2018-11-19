<template>
  <div id="registered">
    <div class="contain">

      <mt-field label="手机" placeholder="请输入手机号" v-model="phone" class="fit">
        <mt-button type="default" class="captcha" @click="getAuthCode">验证码获取</mt-button>
      </mt-field>
      <mt-field label="验证码" v-model="captcha" class="fit" placeholder="请输入验证码"></mt-field>
      <mt-field label="输入密码" placeholder="请输入密码" type="password" v-model="password" class="fit"></mt-field>
      <mt-field label="确认密码" placeholder="请再次输入密码" type="password" v-model="passAgain" class="fit"></mt-field>
      <p>
        <router-link to="/login"><a href="javascript:void(0)">已有账号，登录</a></router-link>
      </p>
      <mt-button type="primary" class="login" @click="getRegister()">注册</mt-button>
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

  #registered {
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
      .fit {
        height: px2rem(80px);
        .captcha {
          @include font-dpr(12px);
          height: px2rem(41px);
          padding: 0 px2rem(18px)
        }
        .mint-cell-title {
          @include font-dpr(12px);
          width: px2rem(120px);
        }
        .mint-cell-value {
          height: 80%;
          input {
            height: 80%;
            padding: px2rem(5px) 0;
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
  import {getReg, sendSms} from '../../axios/login/index'
  export default{
    data(){
      return {
        phone: '',
        captcha: '',
        password: '',
        passAgain: ''
      }
    },
    methods: {

      getRegister(){

        if (this.password !== this.passAgain) {
          Toast({
            message: '两次密码不一致',
            position: 'top'
          });
          return false;
        }

        if (this.phone && this.password && this.captcha && this.passAgain) {
          let para = {
            username: this.phone,
            password: this.password,
            type: 'REGISTER',
            code: this.captcha
          };
          getReg(para).then(function (res) {
            if (res.code == 200) {
              Toast({
                message: res.message,
                position: 'top',
                duration: 1000
              });
              setTimeout(function () {
                this.$router.push('login')
              }, 0)
            } else {
              Toast({
                message: res.message,
                position: 'top',
                duration: 1000
              });
            }
          })
        }
        else {
          Toast({
            message: '请填写完整',
            position: 'top',
            duration: 1000
          });
        }
      },
      getAuthCode(){
        if (!this.phone) {
          Toast({
            message: '请填写手机',
            position: 'top',
            duration: 1000
          });
          return false
        }
        let para = {
          mobile: this.phone,
          type: 'REGISTER'
        };
        sendSms(para).then(function (res) {
             if(res.code !==200){
               Toast({
                 message: res.message,
                 position: 'top',
                 duration: 1000
               });
             }
        })
      }
    }
  };
</script>
