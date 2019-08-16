const isCommonPrefix = (strs, middle) => {
  const prefix = strs[0].substring(0, middle);
  for (let i = 1; i < strs.length; i++) {
    if (!strs[i].startsWith(prefix)) return false;
  }
  return true;
}
const longestCommonPrefix = (strs) => {
  // 最短的字符
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let minLen = Number.MAX_VALUE;
  for (let i = 0; i < strs.length; i++) {
    minLen = Math.min(minLen, strs[i].length);
    // if (strs[i].length < minLen) {
    //   minLen = strs[i].length;
    // }
  }
  //二分 
  let low = 0,  high = minLen;//(动态)

  while (low <= high) {
    const middle = (low + high) >> 1;
    if (isCommonPrefix(strs, middle))  low = middle + 1
    else high = middle - 1;
  }

  return strs[0].substring(0, (low + high) >> 1);

  // console.log(minLen);
}
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));