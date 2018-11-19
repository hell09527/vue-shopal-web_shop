/**
 * Created by ushopal on 2017/11/17.
 */

import {ajax} from '../http';

let  app = 'http://api.dev01.ushopal.com';


//  分销商的API

export const creation = params => {
  return ajax.post(`${app}/api/add/shop`, params)
}; //创建店铺


export const crClose = params => {
  return ajax.post(`${app}/api/close/shop`, params)
}; //关闭店铺



export const myShop = params => {
  return ajax.get(`${app}/api/shops`, {params:params})
}; //我的店铺




export const Aply = params => {
  return ajax.post(`${app}/api/user/kol-apply`, params)
}; //申请kol



export const mylist = params => {
  return ajax.get(`${app}/api/shop/goods`, {params:params})
}; //我的店铺列表
//

//
export const Tob = params => {
  return ajax.get(`${app}/api/goods`, {params:params})
}; //to b 商品列表



export const Ad = params => {
  return ajax.post(`${app}/api/backend/goods-add`, params)
}; //添加商品



export const Tobuser = params => {
  return ajax.get(`${app}/api/informa`, {params:params})
}; //to b 用户列表


export const Tobubill = params => {
  return ajax.get(`${app}/api/agent/order`, {params:params})
}; //to b 订单列表
