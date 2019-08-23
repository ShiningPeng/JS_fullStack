//装饰 方法
// const _ = require('lodash');
// import { debounce } from 'lodash';
function debounce(fn, wait) {
  let timeout, result;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      result = fn();
    }, wait);
    return result;
  }
}
function decDebounce(wait) {
  return function (target, name, descriptor) {
    console.log(target, name, descriptor);
    const originalMethod = descriptor.initializer && 
    descriptor.initializer.call(this);
    return {
      enumerable:true,
      configurable:true,
      // writable:true,
      get:function () {//属性拦截,劫持了get，在这里做增强
        return debounce(originalMethod, wait);
      }
    }
  }
}

class Btn {
  @decDebounce(2000)//防抖时间

  handBuy = () => {
    console.log('向后端发起购买请求');
  }
  bindEvent() {
    document.getElementById('btn').addEventListener('click', this.handBuy);
  }
}
let b = new Btn();
b.bindEvent()