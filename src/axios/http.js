
import qs from 'qs'
import store from "../vuex/store";
let apikey = 'DEVTokenFORApiKey2017';
//http ---
const request = (method, url, data, config = {}) => {
  let options = Object.assign({}, config, {method, url, data});
   options.headers = options.headers || {};
   options.validateStatus = function (status) {
     return status >= 200;
   }; //http status 为200 以上都能返回res.data；
  return new Promise((resolve, reject) => {
    window.axios.request(options).then(res => {
      let data = res.data;
      if (!data) {
        return resolve(data)
      }
      if (data.HasError) {
        if (!res.config.notNotifyError) {
          // toast.msg(data.ErrorMessage);
        }
        reject(res);
      }
      resolve(data)
    }).catch(res => {
       reject(res)
    })
  })
};






export const ajax = {

  get(url, config) {
    if(store.getters.getToken){
      config.params = Object.assign( config.params,{ apikey: apikey},{
        token:store.getters.getToken
      });
    }else {
      config.params = Object.assign( config.params,{ apikey: apikey});
    }


    return request('get', url, null, config);
  },
  post(url, data, config) {
    //let Data = qs.stringify(data);
      let newData;
    if(store.getters.getToken){
      newData = Object.assign({}, data, {
        apikey: apikey,
        token:store.getters.getToken
      });
    }else {
       newData = Object.assign({}, data, {
        apikey: apikey
      });
    }
    let Data = qs.stringify(newData);
    return request('post', url, Data, config);
  },
};
