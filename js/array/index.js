// var arr = [];
// var arr1 = new Array(5); //长度为5，元素都为undefined
// var arr2 = [1, 2, 3, 4 , 5]

// var arr = Array.of(7);
// 创建一个元素为7的数组
// es6新增的Array的of方法

// var arr = Array.of(1, 2, 3)
// arr = [1, 2, 3];

//数组不是基础数据类型，不能用typeof
// var arr = [];
// //判断是不是数组
// if( arr instanceof Array){}
// if(Array.isArray(arr)){}
// if(Object.prototype.toString.call(arr) === '[object Array]'){} //判断任何数据类型（基础和复杂）
// if(arr.constructor === Array){}
// console.log(arr.constructor);//构造器

// Array.from()//从类似数组和可迭代对象创建一个新的数组
// 类数组或对象需要有一个length属性作为新数组的长度
// 第一个参数为需要转变为数组的变量，第二个参数是个方法，

// let arrLike= {
//   0:'a',
//   1:'b',
//   2:'c',
//   length:3
// }
// //for in 来遍历对象
// // ['a','b','c']
// let newArray = Array.from(arrLike);
// var str = 'abc';
// console.log(Array.from(str)); //['a','b','c']
// // console.log(newArray);

// var arr = [1,2,3,4,5];
// var arrToStr = arr.join(''); //返回新的东西，而不会修改原来的数组
// console.log(arrToStr);

// var arr = [2,4,5,1,3];
// // console.log(arr.sort((a,b) => a-b));//sort会修改原数组
// // console.log(arr.slice(0,2))//[2, 4]
// // arr.splice(0,2);
// // console.log(arr); //[5,1,3]
// arr.splice(0,2,7);//arr [7,5,1,3]
// console.log(arr);

// 数组的copyWithin 方法
// copyWithin(target, start, count)
//target 为 要替换的位置，start 开始复制的下标，count 从start开始复制多少个，未指定则到尾

var arr = [1,2,3,4,5];
// arr.copyWithin(0,3);
// console.log(arr)//[4,5,3,4,5]

// arr.fill(value, start, end);  替换成value
// arr.fill(9,0,1)
// console.log(arr);//[9,2,3,4,5]

// indexOf
// lastIndexOf


//includes
// console.log(arr.includes(2));//true

// find(回调函数，当前的数组)
// arr.find(v => v<3)//返回满足条件的第一个元素
// //1
