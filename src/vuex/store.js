import Vue from 'vue';
import Vuex from 'vuex';
import store from "./store";
import {getUser} from '../axios/login/index'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navShow: 0 ,
    token:'',
    user:null,
      carts:[],
      newslist:[],
      newsname:'',
      id:'',
      indent:[],
      Delid:[],
      totalPrice:''

  },//state 定义了应用状态的数据结构，同样可以在这里设置默认的初始状态。
  actions: {
    getNav({commit}, num){
      return new Promise((resolve, reject) => {
        commit('SET_NAV', num);
        resolve();
      })
    },
    LoginByToken({commit},token){
      //获取token ---每次获取userinfo
      return new Promise((resolve,reject)=>{
        commit('SET_TOKEN', token);
        sessionStorage.setItem('TOKEN',token);
         if(store.getters.getUserInfo ===null){
           getUser({}).then((res)=>{
             if(res.code ==200){
               commit('SET_USER_INFO', res.data);
             }
           })
         }
        resolve();
      })
    }
  },//Actions 即是定义提交触发更改信息的描述,
  // 在数据获取完成后会调用store.commit()来调用更改 Store 中的状态。
  // 可以在组件中使用dispatch来发出 Actions。
  mutations: {
    SET_NAV:function(state,num){
      this.state.navShow =  num;
    },
    SET_TOKEN:function (state,token) {
        this.state.token = token;
    },
    SET_USER_INFO:function (state,data) {
      this.state.user = data.userinfo;
    },
      addToCart(state, goods){

          // console.log(goods);
          //cart的数据格式 {id: 18, count: 1}

          //先去localStorage中获取之前存储好的购物车信息
          var carts = localStorage.getItem("carts");
          carts = carts ? JSON.parse(carts) : [];

          //遍历获取到的购物车数组，判断是否有和当前加进来的商品id相同的购物车数据


          var isExsit = false;

          carts.forEach(v=>{
              //如果有，就将count合并，
              if(v.id == goods.id){
                  v.count += goods.count;
                  isExsit = true;
              }
          })

          //如果没有就将新的购物车数据push数组中
          if(!isExsit){
              carts.push(goods);
          }

          //将购物车数组数据重新存入到localstorage去
          localStorage.setItem("carts",JSON.stringify(carts));

          //将vuex中的数据和localStorage中的数据进行同步！！
          state.carts = carts;



      },
      minusCount(state, id){
          state.carts.forEach(v=>{
              if(v.id == id ){
                  v.count --;
              }
          })

          localStorage.setItem("carts",JSON.stringify(state.carts));
      },
      addCount(state, id){
          state.carts.forEach(v=>{
              if(v.id == id ){
                  v.count ++;
              }
          })
          localStorage.setItem("carts",JSON.stringify(state.carts));
      },
      del(state, id){
          var index = state.carts.findIndex(v => {
              return v.id == id;
          })

          state.carts.splice(index, 1);
          localStorage.setItem("carts",JSON.stringify(state.carts));
      },
      dlorder(){
          var index = state.indent.findIndex(v => {
              return v.id == id;
          })

          state.indent.splice(index, 1);
          localStorage.setItem("indent",JSON.stringify(state.indent));
      }

  },
  //调用 mutations 是唯一允许更新应用状态的地方。
    getters: {
        //Getters 允许组件从 Store 中获取数据.
        countAnother: function (state) {
            return state.navShow
        },
        getToken: function (state) {
            return state.token
        },
        getUserInfo: function (state) {
            return state.user
        },
        cartsTotalCount: state => {
            var carts = localStorage.getItem("carts");
            state.carts = carts ? JSON.parse(carts) : [];

            var result = 0;
            state.carts.forEach(v => {
                result += v.count;
            })
            return result;


        },
        //计算总价格问题
        counts: state => {
            var obj = {};
            state.carts.forEach(v => {
                obj[v.id] = v.count;
            })
            return obj;
        }
    }




})

//counts就是一个对象， 将购物车数组中所有的id作为键，将id对应的count作为值
//存在了counts数组中







    //Getters 允许组件从 Store 中获取数据.






