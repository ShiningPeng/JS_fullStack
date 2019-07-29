import axios from 'axios';
import { Toast } from 'mand-mobile';
//qs序列化数据，
import { stringify } from 'qs';
import store from '../store/index'//vuex将在这里得到引用

//封装axios
let tmpTrip = store.state.trip;

//接口请求的时间限制10s
axios.defaults.timeout = 10000;
//设置一个跨域请求需要使用的凭证，默认否，即默认不使用
axios.defaults.withCredentials = false;

//给请求添加拦截器(接口发送给后端，反正后端还没有接收到的时候，做的操作)
axios.interceptors.request.use(
  config => {
    //判断，每次发送请求之前，判断vuex中是否存在token
    // 如果存在，则统一在http请求的header上都加上token，这样后台能根据token判断用户当前是否是登录状态
    // 即使本地存在token，也有可能token是过期的，所以在拦截器中要返回状态进行判断
    // const token store.state.token
    // token && (config.header.Authorization == token)
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return config;
  },
  error => {
    Toast.failed('请求过程出错')
    return Promise.error(error);
  }
)

//响应拦截（后端接收到东西后返回给前端，前端还没有收到的时候）
axios.interceptors.response.use(function (response) {
  //对响应数据进行操作
  return response;
}, function (error) {
  Toast.failed('响应过程出错');
  return Promise.reject(error);
})

var request = (options) => {
  //每次请求传入当前用户的id
  if (tmpTrip.user) {
    if (options.body) {
      options.body.userId = tmpTrip.user.userId;
    }
    if (options.params) {
      options.params.userId = tmpTrip.user.userId;
    }
  }
  //表单传值参数格式化
  return axios.request({
    url: `http://localhost:3000${options.url}`,
    method: options.method,
    data: options.body,
    params: options.params
  }).then(response => {
    return response;
  }, err => {
    Toast.failed(err.message);
    throw err;
  }).catch((error) => {
    Toast.failed('请求失败！');
    throw error;
  })
}

// 封装http请求方式
export const http = {};
const methods = ['get', 'post', 'put', 'delete'];
methods.forEach(method => {
  http[method] = (url, params = {}) => {
    if (method === 'get') {
      return request({ url, params, method })
    }
    return request({ url, body: stringify(params), method })
  }
})

export default function plugin(Vue) {
  if(plugin.installed) {
    return;
  }
  plugin.installed = true;
  Object.defineProperties(Vue.prototype,{
    //defineProperties方法：直接在一个对象上新增属性或者修改原有属性，并返回最新的对象
    $http:{
      get(){
        const obj = {
          get:http['get'],
          post:http['post'],
          put:http['put'],
          delete:http['delete']
        }
        return obj;
      }
    }
  })
}