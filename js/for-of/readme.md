##for of
用于遍历  可迭代对象
比如  Array,Map,Set,String,TypedArray
可迭代对象有两个要求
  1. 存在 Symbol.iterator 属性 （有@@iterator方法）
  2. Symbol.iterator 是一个方法 返回一个next属性，next 必须是个方法，
  next必须返回对象，必须包含done和value两个字段
  ```js
  [Symbol.iterator] = () => ({
    next:()=>{
      return {
        done:
        value:
      }
    }
  })
  ```