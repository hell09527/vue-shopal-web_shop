
import {ajax} from '../http';

let  app = 'http://api.dev01.ushopal.com';
// if(process.env.NODE_ENV ==='production'){
//   app = '';
// }
// else
// {
//   app = 'http://api.dev01.ushopal.com'
// }





export const getReg = params => {
  return ajax.post(`${app}/api/user/register`, params)
}; //注册

export const sendSms = params => {
  return ajax.get(`${app}/api/communication/send-sms`, {params:params})
}; //sms


export const authenicator = params => {
  return ajax.get(`${app}/api/user/authenicator`, {params:params})
}; //用户认证


export const getUser = params => {
  return ajax.get(`${app}/api/user/info`, {params:params})
}; //userinfo
