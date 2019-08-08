// [1, 2, 3, 4, 5, 6]  2
// 排序  已经排序好的数组：二分查找
function binarySearch(arr, data) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (arr[mid] === data) {
      return mid;
    } else if (arr[mid] > data) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 4, 6, 9, 12], 3));
