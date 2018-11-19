/**
 * Created by ushopal on 2017/11/14.
 */

import {ajax} from '../http';

let  app = 'http://api.dev01.ushopal.com';

export const getShop = params => {

  return ajax.get(`${app}/api/goods/detail`, {params:params})
}; //商品详情


export const addCart = params => {

  return ajax.post(`${app}/api/add/shopping-cart`, params)
}; //add



export const addjia = params => {

  return ajax.post(`${app}/api/on-shelves-goods/shop`, params)
}; //shangjia



export const Xiony= params => {

  return ajax.post(`${app}/api/off-shelves-goods/shop`, params)
}; //下架
