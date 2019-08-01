let arr = [5, 8, 4, 3, 9, 6, 1, 48, 23];
function kthLagest(arr, k) {
  if (k < 0 || k > arr.length - 1) return NaN;
    return arr.sort((a, b) => b - a)[k - 1];
}
console.log(kthLagest(arr, 2));