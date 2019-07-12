function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
function selectionSort(arr) {
  var minIndex, temp;
  for (var i = 0; i < arr.length; i++) {
    minIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log('bubbleSort', bubbleSort([5, 4, 2, 8, 1, 9, 3, 6, 7]));
console.log('selectionSort', selectionSort([5, 4, 2, 8, 1, 9, 3, 6, 7]));
