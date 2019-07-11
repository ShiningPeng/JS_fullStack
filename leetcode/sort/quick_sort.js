// 快排
// a(一个整体) b(中间值) c(一个整体) 看做整体，就三个数排序，两边的数与中间的数进行比较
// 递归

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // Math.round()向下取整
  var left = [], right = [], baseDot = Math.round(arr.length / 2),
    base = arr.splice(baseDot, 1)[0];
  //找到中间值
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i])
    } else {
      right.push(arr[i]);
    }
  }
  // left a
  // base 中间值
  // right b
  console.log(left, right);
  return quickSort(left).concat([base], quickSort(right));
}
var arr = [1, 7, 3, 5, 2, 9];
console.log('最后排序结果', quickSort(arr));