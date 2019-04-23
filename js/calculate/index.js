// ali 14.6 2.6
// meituan 16 4个月年终奖
// 51信用卡 17 5
// S 5
// A 3
// B 2
// C 1
// D
// level key 计算函数
let straigies = {
  'S': function() {
    return salary * 5;
  },
  'A': function() {
    return salary * 3;
  },
  'B': function() {
    return salary * 2;
  },
  'C': function() {
    return salary * 1;
  }
}

function calculate(level,salary) {
  return straigies[level](salary);
  // 有分支？
  // switch(level){
  //   case 'S':
  //   return 5 * salary;break;
  //   case 'A':
  //   return 3 * salary;break;
  //   case 'B':
  //   return 2 * salary;break;
  //   case 'C':
  //   return 1 * salary;break;
  //   default:return 0;
  // }
}
console.log(calculate('S',10000));