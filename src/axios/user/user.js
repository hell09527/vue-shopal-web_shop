/**
 * Created by ushopal on 2017/11/14.
 */

import {ajax} from '../http';

let  app = 'http://api.dev01.ushopal.com';






export const userRe = params => {
  return ajax.get(`${app}/api/user/info`, {params:params})
}; //获取用户信息
