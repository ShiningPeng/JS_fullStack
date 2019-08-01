//判断回文  'aba'
// function validPalindrome(str) {
//   if(!str || typeof str !== 'string') return false;
//   return  str.split("").reverse().join("") === str;
// }
// console.log(validPalindrome('abcdecba'));



var isValidChar = (c) => {//数字 字母
  return /^[\w]$/.test(c);
}
var isPalindrom = (s) => {
  s = s.toLowerCase();
  left = 0;
  right = s.length - 1;

  while(left < right){
    if(!isValidChar(s[left])){
      left++;
      continue;
    }
    if(!isValidChar(s[right])){
      right--;
      continue;
    }
    if(s[left] == s[right]){
      left++;
      right--;
    }else{
      break;
    }
  }
  return right<=left;
}
console.log(isPalindrom('aba'))