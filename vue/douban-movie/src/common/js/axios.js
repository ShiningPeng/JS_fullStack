import axios from 'axios';
import Cookie from 'js-cookie';
import router from '@/router/index';

const instance = axios.create({
  //
  timeout: 60000,
  // baseURL: 'https://www.easy-mock.com/mock/5cbf0110a70f960bc333c4e7'
})

const COOKIE_NAME = 'movie_trailer_user';   //写死的cookie

instance.interceptors.response.use(res => {
  //响应拦截
  const { data } = res;   //相当于 const data = res.data;
  //判断登录失败
  if (data.code === 1003) {
    Cookie.remove(COOKIE_NAME);
    router.replace('/login') //重写路由
    return
  }
  return Promise.resolve(data);
}, () => {
  router.push('/error');
})

export default {
  install: (Vue, option) => {
    Object.defineProperty(Vue.prototype, '$axios', instance)
  }
}
