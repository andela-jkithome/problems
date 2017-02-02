// Amicable numbers

function main(n) {
  var pairs = 0;
  var nums = [];
  for (var i = 2; i < n; i++) {
    if (nums.indexOf(i) === -1) {
      var iSum = divisors(i);
      var divSum = divisors(iSum);
      if (divSum === i && iSum !== divSum) {
        pairs++;
        nums = [...nums, i, iSum];
      }
    }
  }
  var sum = nums.reduce((a, b) => {
    return a + b; }, 0);
  return sum;
}

function divisors(num) {
  var root = Math.ceil(Math.sqrt(num));
  var arr = [1];
  for (var i = 2; i <= root; i++) {
    if (num % i === 0) {
      var upperDivisor = num / i;
      arr = [...arr, i, upperDivisor];
    }
  }
  var sum = arr.reduce((a, b) => {
    return a + b; }, 0);
  return sum;
}
