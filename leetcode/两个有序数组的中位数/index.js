function MergeArray(arr1, arr2) {
  let res = [], i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    while (i < arr1.length && arr1[i] <= arr2[j]) {
      res.push(arr1[i]);
      i++;
    }
    while (j < arr2.length && arr2[j] <= arr1[i]) {
      res.push(arr2[j]);
      j++;
    }
  }
  if (i === arr1.length) {
    res.push(...arr2.slice(j));
  }
  if (j === arr2.length) {
    res.push(...arr1.slice(i));
  }
  return res;
}
var findMedianSortedArrays = function (nums1, nums2) {
  let mArray = MergeArray(nums1, nums2);
  let len = nums1.length + nums2.length;
  var t = Math.floor(len / 2);
  if (mArray.length % 2 === 0) {
    return (mArray[t - 1] + mArray[t]) / 2;
  } else {
    return mArray[t];
  }
}
console.log(findMedianSortedArrays([1, 5, 9, 10], [4, 11, 12, 13]));