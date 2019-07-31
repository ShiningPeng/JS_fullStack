const a = {
  b:1
}
function b(){
  console.log('a的值发生改变', a.b);
}

function bindData(){
  //此方法返回由一个给定对象的自身可枚举属性的数组
  Object.keys(a).map(key => {
    let v = a[key];
    //属性拦截
    Object.defineProperty(a, key, {
      get(){//读取属性时调用的方法
        console.log('正在读取a里面的值');
        return v;
      },
      set(newA){//写入(修改或新增)属性时调用的方法,参数是新值
        v = newA;
        b();
      }
    });
  })
}
bindData();
a.b = 1;