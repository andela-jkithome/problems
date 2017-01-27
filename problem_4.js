function main() {
  var palindrome = 0;
  for (var i = 100; i <= 999; i++) {
    for (var j = i; j <= 999; j++) {
      var product = i * j;
      var result = isPalindrome(product);
      if (result && product > palindrome) {
        palindrome = product;
      }
    }
  }
  return palindrome;
}



function isPalindrome(num) {
  const str = String(num);
  const len = str.length;
  let palindrome = true;
  for (var i = 0; i < len; i++) {
    var indexA = i;
    var indexB = len - 1 - i;
    if (indexA === indexB) {
      break;
    } else {
      if (str[indexA] !== str[indexB]) {
        palindrome = false;
        break;
      }
    }
  }
  return palindrome;
}
