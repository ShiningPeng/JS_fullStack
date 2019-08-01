function findKthLargest(nums, k) {
  const arr = quick_sort(nums).reverse();
  return arr[k - 1];
}
function quick_sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let left = [], right = [], base = arr.splice(Math.round(arr.length / 2), 1)[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i])
    } else {
      right.push(arr[i]);
    }
  }
  return quick_sort(left).concat([base], quick_sort(right));
}
console.log(findKthLargest([5, 4, 9, 2, 1, 7, 6], 2));