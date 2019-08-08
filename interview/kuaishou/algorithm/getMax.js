var str = 'abcdeffggghhhhiiiii';

function getMax(str) {
  let hash = {},   //哈希表
    max = 0, maxStr;
  for (let i = 0; i < str.length; i++) {
    //hash  有i吗
    //有的话+1
    // 没有的话设置为1
    let char = str[i];
    if (!hash[str[i]]) {
      //没有
      hash[char] = 1;
    } else {
      hash[char]++;
    }
    if(hash[char] > max){
      max = hash[char];
      maxStr = char;
    }
  }
  return maxStr;
}

console.log(getMax(str));