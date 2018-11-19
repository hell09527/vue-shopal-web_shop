import Vue from "vue";
import Vuex from 'vuex'
import axios from "axios";
import App from "./App";
Vue.use(Vuex);



import Mint from "mint-ui";
import "mint-ui/lib/style.css";

import store from "./vuex/store";
import JsEncrypt from "jsencrypt";
import router from "./router/index";





// import Element from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";

const TOKEN = sessionStorage.getItem('TOKEN');
// Vue.use(Element);
Vue.use(Mint);
window.axios = axios;
Vue.config.productionTip = false;
//原型添加新对象 ----JSEncrypt 不对称密匙
Vue.prototype.$jsEncrypt = JsEncrypt;

//beforeach --- 处理路由

router.beforeEach((to, from, next) => {

//初始化进入home --主页
  if (to.path === '/') {
    next('/home')
  } else {
    // 添加navtab 控制器
    if (to.path === '/login' || to.path === '/register'|| to.path === '/applay_for_kol'|| to.path === '/kolshop'|| to.path === '/particular'||
      to.path === '/shop' || to.path === '/myparticular'|| to.path === '/creatshop'|| to.path === '/agency'
      || to.path === '/dinfo' || to.path === '/controlShop' || to.path === '/rbger'|| to.path === '/mymonad'
      || to.path === '/myinfo' ) {
      store.dispatch('getNav', 1);
      next();
    } else {
      store.dispatch('getNav', 0);
      next();
    }








    //判断在这些路由中允许无认证访问
    if (to.path === '/login' || to.path === '/register' || to.path === '/home' || to.path === '/user'|| to.path === '/shop'|| to.path === '/shop') {
      // home user router 进去后如果没有userinfo  取得user信息
      if (to.path === '/home') {
        if (!store.getters.getUserInfo && TOKEN) {
          store.dispatch('LoginByToken', TOKEN).then(() => {
            next(to.path);
          });
        }
      }

      if (to.path === '/user') {
        if (!store.getters.getUserInfo && TOKEN) {
          store.dispatch('LoginByToken', TOKEN).then(() => {
            next(to.path);
          });
        }
      }
      next()
    } else {
      // 判断是否vuex里是否有token和session里TOKEN，都没有跳转login页面认证。
      if (store.getters.getToken) {
        next(to.path);
      } else {
        if (TOKEN) {
          store.dispatch('LoginByToken', TOKEN).then(() => {
            next(to.path);
          })
        } else {
          next('/login');
        }
      }
    }

  }
  next()
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});


// // 初始化进入home --主页
// router.push('home');
