import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/index/home.vue'
import sport from '@/page/index/sport.vue'
import login from '@/page/login/login.vue'
import register from '@/page/login/register.vue'
import user from '@/page/user/user.vue'
import userInfo from '@/page/user/userInfo.vue'
import userAddress from '@/page/user/userAddress.vue'
import order from '@/page/order/order.vue'
import orderDetails from '@/page/order/orderDetails.vue'
import orderReturn from '@/page/order/orderReturn.vue'
import shop from '@/page/index/shop.vue'
import shoppingCart from '@/page/cart/shoppingCart.vue'
import tallyOrder from '@/page/cart/tallyOrder.vue'
import payOrder from '@/page/cart/payOrder.vue'
import bill from '@/page/bills/bill.vue'

import kolshop from '@/page/kolshop/kolshop.vue'
import myinfo from '@/page/kolshop/myinfo.vue'

import mymonad from '@/page/kolshop/mymonad.vue'
import creatshop from '@/page/kolshop/creatshop.vue'
import applay_for_kol from '@/page/kolshop/applayForKol.vue'
import creationshop from '@/page/kolshop/creationshop.vue'

import myshop from '@/page/kolshop/myshop.vue'
import particular from '@/page/kolshop/particular.vue'
import myparticular from '@/page/kolshop/myparticular.vue'
import rbger from '@/page/kolshop/rbger.vue'


import dinfo from '@/page/agency/dinfo.vue'
import controlShop from '@/page/agency/controlShop.vue'




Vue.use(Router);

export default new Router({

  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: userInfo
    },
    {
      path: '/Address',
      name: 'Address',
      component: userAddress
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/orderDetails',
      name: 'orderDetails',
      component: orderDetails
    },
    {
      path: '/orderReturn',
      name: 'orderReturn',
      component: orderReturn
    },
    {
      path: '/shop/:id',
      name: 'shop',
      component: shop
    },
    {
      path: '/tallyOrder/:pr',
      name: 'tallyOrder',
      component: tallyOrder
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    },

    {
      path: '/payOrder/:pr',
      name: 'payOrder',
      component: payOrder
    },

    {
      path: '/kolshop',
      name: 'kolshop',
      component: kolshop
    },
    {
      path: '/myinfo',
      name: 'myinfo',
      component: myinfo
    },

    {
      path: '/mymonad',
      name: 'mymonad',
      component: mymonad
    },

    {
      path: '/creatshop',
      name: 'creatshop',
      component: creatshop
    },

  {
    path: '/applay_for_kol',
    name: 'applay_for_kol',
    component: applay_for_kol
  },

    {
      path: '/bill',
      name: 'bill',
      component: bill
    },
    {
      path: '/myshop',
      name: 'myshop',
      component: myshop
    },
    {
      path: '/particular/:id',
      name: 'particular',
      component: particular
    },
    {
      path: '/myparticular/:id',
      name: 'myparticular',
      component: myparticular
    },
    {
      path: '/dinfo',
      name: 'dinfo',
      component:dinfo
    },
    {
      path: '/rbger',
      name: 'rbger',
      component:rbger
    },
    {
      path: '/controlShop',
      name: 'controlShop',
      component:controlShop
    },
    {
      path: '/sport',
      name: 'sport',
      component:sport
    },
      {path: '/creationshop',
          name: 'creationshop',
          component:creationshop
      },





  ],
  linkActiveClass: 'active'
})
