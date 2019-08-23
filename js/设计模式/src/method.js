//装饰 类上的某个方法

function log(target, name, descriptor) {
  console.log(target, name, descriptor);
  const originalMethod = descriptor.value;
  descriptor.value = function(...args) {
    console.log('增强了');
    return originalMethod(...args);
  }
}

// function Operation () {}
// Operation.prototype = {}
// Object.defineProperty(Operation.prototype, add , {})
class Operation {

  @log
  add(a, b) {
    // console.log('add成功执行了')
    return a + b;
  }
}

const opt = new Operation();
console.log(opt.add(5, 7));
console.log(opt.add(3,4));

// let obj = {};
// Object.defineProperty(obj, 'add', {
//   value: function (a, b) {
//     return a + b;
//   }
// })
// console.log(obj.add(3,4));