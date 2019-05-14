function binary_search(arr, data) {
  // 不停的二分， 什么时候停下来？ 当没得再分的时候停止  min > max
  let min = 0, max = arr.length - 1, mid;

  while (min <= max) {
    // mid = parseInt((min + max) / 2);
    // mid = min + parseInt((max - min) / 2);
    mid = min + ((max - min) >> 1);
    if (arr[mid] > data) {
      max = mid - 1;
    }
    else if (arr[mid] < data) {
      max = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// console.log(binary_search([1, 4, 7, 9, 10, 12], 10));

let arr = [];
for (let i = 0; i < 10000000; i++) {
  arr.push(i);
}
console.log(binary_search(arr, 2019));

