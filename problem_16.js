// Power digit sum

function main(number, exponent) {
  var result = bigSquare(number, exponent);
  var sum = result.reduce((a,b) => {return a + b}, 0);
  return sum;

}
function bigSquare(num, pow) {
  var arr = [1];
  for(var i = 1; i <= pow; i++) {
    var carryOver = 0;
    for(var j = arr.length - 1; j >= 0; j--) {
      var currentNum = arr[j];
      var newNumber  = (num * currentNum) + carryOver;
      if (newNumber >= 10) {
        arr[j] = newNumber % 10;
        if(j === 0) {
          arr.unshift(Math.floor(newNumber / 10));
          break;
        } else {
          carryOver = (Math.floor(newNumber / 10));
        }
      } else {
        arr[j] = newNumber;
        carryOver = 0;
      }
    }
  }
  return arr;
}
