
import {ajax} from '../http';

let  app = 'http://api.dev01.ushopal.com';
export const getOrder = params => {
  return ajax.get(`${app}/api/orders`, {params:params})
}; //订单列表



export const delOrder = params => {
  return ajax.post(`${app}/api/delete/order`,params)
}; //删除订单




export const address = params => {
  return ajax.post(`${app}/api/add/address`, params)
}; //添加地址


export const delRess = params => {
  return ajax.post(`${app}/api/delete/address`, params)
}; //删除地址


export const moRess = params => {
  return ajax.post(`${app}/api/default/address`, params)
}; //默认地址




export const myshop = params => {
  return ajax.get(`${app}/api/shops`, {params:params})
}; //我的店铺


export const mylocal = params => {
  return ajax.get(`${app}/api/address`, {params:params})
}; //查询我的地址




export const dong = params => {
    return ajax.get(`${app}/api/area/list`, {params:params})
};
//三级联动

export const getlocal = params => {
    return ajax.get(`${app}/api/address/detail`, {params:params})
};
//获取指定地址




export const getcity = params => {
    return ajax.get(`${app}/api/area/index`, {params:params})
};

//根据id获取城市

export const xumo = params => {
    return ajax.get(`${app}/api/default/index`, {params:params})
};
//渲染默认地址




export const getsite = params => {
    return ajax.get(`${app}/api/address/detail`, {params:params})

};
// /获取点击的地址

export const savelocl = params => {
    return ajax.post(`${app}/api/save/address`, params)
};
//保存修改地址
