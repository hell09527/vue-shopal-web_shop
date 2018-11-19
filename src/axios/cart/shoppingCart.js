/**
 * Created by ushopal on 2017/11/14.
 */

import {ajax} from '../http';

let  app = 'http://api.dev01.ushopal.com';


export const showCart = params => {
  return ajax.get(`${app}/api/shopping-cart`, {params:params})
}; //showcart


export const delCart = params => {
  return ajax.post(`${app}/api/delete/shopping-cart`, params)
}; //

// export const tallCart = params => {
//   return ajax.get(`${app}/api/orders`, {params:params})
// }; //订单列表




export const adCart = params => {
  return ajax.post(`${app}/api/add/order`, params)
}; //创建订单

export const dlCart = params => {
  return ajax.post(`${app}/api/delete/order`, params)
}; //删除订单


export const aLocal = params => {
  return ajax.post(`${app}/api/default/address`, params)
}; //设置默认地址
