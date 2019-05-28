// [1,2,3,4] 求出它的平均值

const average = (...nums) => {//rest 收起来
  return nums.reduce((acc, val) => acc+val, 0) / nums.length
}
console.log(average(...[1, 2, 3, 4])) //spread运算符