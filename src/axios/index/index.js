/**
 * Created by ushopal on 2017/11/13.
 */

import {ajax} from '../http';

let  app = 'http://api.dev01.ushopal.com';

export const getHome = params => {
  return ajax.get(`${app}/api/shop/goods`, {params:params})
}; //商品

export const boomPn = params => {
  return ajax.post(`${app}/api/add/order`, params)
}; //创建订单
